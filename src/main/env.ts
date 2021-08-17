import { resolve } from 'path'
import { config } from 'dotenv'

const bootstrap = () => {
  const env = process.env.NODE_ENV

  if (env === 'production') {
    config({
      path: resolve(__dirname, '..', '..', '.env.production')
    })

    return
  }

  config({
    path: resolve(__dirname, '..', '..', '.env.acceptance')
  })
}

bootstrap()