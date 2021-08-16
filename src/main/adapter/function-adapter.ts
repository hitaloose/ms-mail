import { Context } from "@google-cloud/functions-framework/build/src/functions";
import { PubsubMessage } from "@google-cloud/pubsub/build/src/publisher";

import { Controller } from "../../application/contracts/controller";

export const functionAdapter = (controller: Controller) => {
  return (event: PubsubMessage, context: Context) => {
    console.log(event.data?.toString())
    console.log(context)
  }
}