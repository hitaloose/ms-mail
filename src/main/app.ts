import express from 'express'
import cors from 'cors'
import { controllerAdapter } from './adapter/controller-adapter'
import { makeSendEmailController } from './factories/make-send-email-controller'

const app = express()

app.use(express.json())
app.use(cors)

app.post('/send-email', controllerAdapter(makeSendEmailController()))

export { app }