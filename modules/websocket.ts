import type { IncomingMessage } from 'node:http';
import type { Socket, Server } from 'node:net';
import { WebSocketServer } from 'ws';
import { createResolver, defineNuxtModule, addTemplate } from '@nuxt/kit';


export interface ModuleOptions {}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'websockets',
  },
  defaults: () => ({}),
  setup(options, nuxt) {
    // const wss = new WebSocketServer({ noServer: true });
    // addTemplate({
    //   filename: 'test/websocket.js',
    //   src: createResolver(import.meta.url).resolve('./templates/test.ts'),
    //   write: true,
    // })
    // let _nitro
    // let _server
    // nuxt.hook('nitro:init', (nitro) => {
    //   console.log('nitro:init')
    //   // console.log('nitro init', nitro)
    //   // nitro.hooks.addHooks

    //   _nitro = nitro


    //   nitro.hooks.hook('compiled', (a) => {
    //     console.log('compiled')
    //     console.dir(Object.keys(a.vfs), { depth: 0})
    //     console.log(a.vfs['#internal/nitro/virtual/server-handlers'])
    //     // console.log('compiled', nitro)
    //     // nitro.hooks.addHooks
    //     // nitro.hooks.hook('server:listen:ready', createServer)
    //   })
    // })
    // nuxt.hook('listen', (server: Server) => {
    //   _server = server
    //   console.log('listen')
    // })

    // nuxt.hook('ready', () => {
    //   console.log('ready')
    // })
    // nuxt.hook('build:done', () => {
    //   console.log('build:done')

    //   // setTimeout(() => {
    //   //   // console.log('setTimeout build:done', _nitro.hooks)
    //   //   _nitro.hooks.callHook('server:listen:ready', _server)
    //   // }, 5000)
    // })
    //   server.on('upgrade', async (request: IncomingMessage, socket: Socket, head: Buffer) => {
    //     const [, token] = request.headers['authorization']?.split(' ') ?? [];
    //     if (!token) {
    //       socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    //       socket.destroy();
    //       return;
    //     }
    
    //     // check token
    //     request.user = { login: token };
    
    //     wss.handleUpgrade(request, socket, head, (ws) => {
    //       wss.emit('connection', ws, request);
    //     });
    //   });
    
    //   wss.on('connection', function connection(ws, request) {
    //     ws.on('message', function message(data) {
    //       console.log('received: "%s" from %o', data, request.user);
    //       ws.send(`pong ${request.user.login} ${data}`);
    //     });
    
    //     console.log('connected: %o', request.user);
    //     ws.send(`hello ${request.user.login}`);
    //   });
    
    //   console.log(`websocket listen: ws://[::1]:3000}`);
    // });

    
    // nuxt.hook('nitro:config', (config) => {
    //   config.virtual['#wss-server'] = () => wss
    //   console.log(`nitro:config "#wss-server"`);
    // });
  },
});
