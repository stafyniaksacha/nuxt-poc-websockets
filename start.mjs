import { Server } from 'node:http'
import destr from 'destr'
import { a as useRuntimeConfig, u as useNitroApp } from './.output/server/chunks/nitro/node.mjs'

const port = (destr(process.env.NITRO_PORT || process.env.PORT) || 3000)
const host = process.env.NITRO_HOST || process.env.HOST

const nitroApp = useNitroApp()
const server = new Server(nitroApp.h3App.nodeHandler)
server.listen(port, host, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  // trigger custom hook when server is ready
  nitroApp.hooks.callHook('server:listen:ready', server)

  const protocol = 'http'
  const i = server.address()
  const baseURL = (useRuntimeConfig().app.baseURL || '').replace(/\/$/, '')
  const url = `${protocol}://${i.family === 'IPv6' ? `[${i.address}]` : i.address}:${i.port}${baseURL}`
  console.log(`Listening ${url}`)
})

if (process.env.DEBUG) {
  process.on('unhandledRejection', err => console.error('[nitro] [dev] [unhandledRejection]', err))
  process.on('uncaughtException', err => console.error('[nitro] [dev] [uncaughtException]', err))
} else {
  process.on('unhandledRejection', err => console.error('[nitro] [dev] [unhandledRejection] ' + err))
  process.on('uncaughtException', err => console.error('[nitro] [dev] [uncaughtException] ' + err))
}