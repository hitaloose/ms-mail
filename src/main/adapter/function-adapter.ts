import { Context } from "@google-cloud/functions-framework";
import { PubsubMessage } from "@google-cloud/pubsub/build/src/publisher";

import { Controller } from "../../application/contracts/controller";

export const functionAdapter = (controller: Controller) => {
  return async (message: PubsubMessage, _: Context, callback: Function) => {
    const dataString = Buffer.from(message.data as any, 'base64').toString()
    const data = JSON.parse(dataString)
    
    const { statusCode, body } = await controller.run({ body: data })

    if (statusCode >= 200 && statusCode <= 299) {
      callback(null, 'Success!')
    }

    if (statusCode >= 400) {
      callback(body)
    }
  }
}