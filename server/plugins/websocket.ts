import type { NitroApp } from 'nitropack'
import { createWsServer } from '../shared/create-server'

export default defineNitroPlugin(async (nitroApp: NitroApp) => {
  if (process.dev) {
    // create new server to handle websocket connections in dev
    const { Server } = await import('node:http')
    const server = new Server()

    server.listen(33333, () => {
      createWsServer(server)
    })

    return
  }

  // wait for nitro custom node preset hook
  nitroApp.hooks.hook('server:listen:ready', createWsServer)
})