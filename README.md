# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
node ./start.mjs
```


# Websocket

Create Client A
```bash
wscat -H "Authorization:Basic clientA" -c 'ws://[::]:33333'
```

Create Client B
```bash
wscat -H "Authorization:Basic clientB" -c 'ws://[::]:33333'
```

> **note**: install wscat with `npm i -g wscat`

Broadcast to all clients
```bash
curl http://localhost:3000/api/broadcast \
  -XPOST \
  -H "content-type: application/json" \
  -d '{"message": "hello"}'
```
