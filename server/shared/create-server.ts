import type { IncomingMessage } from 'node:http';
import type { Socket, Server } from 'node:net';
import { AddressInfo, WebSocketServer, type WebSocket } from 'ws';

import { state } from './api'

interface User {
  login: string
}

declare module 'ws' {
  interface WebSocket {
    user?: User
  }
}

export const createWsServer = (server: Server) => {
  const protocol = 'ws'
  const i = server.address() as AddressInfo
  const baseURL = (useRuntimeConfig().app.baseURL || '').replace(/\/$/, '')
  const url = `${protocol}://${i.family === 'IPv6' ? `[${i.address}]` : i.address}:${i.port}${baseURL}`
  
  state.wss = new WebSocketServer({ noServer: true });
  state.url = url

  server.on('upgrade', async (request: IncomingMessage, socket: Socket, head: Buffer) => {
    const [, token] = request.headers['authorization']?.split(' ') ?? [];
    if (!token) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    // check token
    const user: User = { login: token };

    state.wss.handleUpgrade(request, socket, head, (ws) => {
      state.wss.emit('connection', ws, request, user);
    });
  });

  state.wss.on('connection', function connection(ws: WebSocket, request: IncomingMessage, user: User) {
    ws.user = user

    ws.on('message', function message(data) {
      console.log('received: "%s" from %o', data, user);
      ws.send(`pong ${user.login} ${data}`);
    });

    console.log('connected: %o', user);
    ws.send(`hello ${user.login}`);
  });

  console.log(`Websocket Listening ${url}`)
}