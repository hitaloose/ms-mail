import { PubsubMessage } from "@google-cloud/pubsub/build/src/publisher";

import { Controller } from "../../application/contracts/controller";

export const functionAdapter = (controller: Controller) => {
  return (message: PubsubMessage) => {
    const data = Buffer.from(message.data as any, 'base64').toString()

    console.log(data)
  }
}