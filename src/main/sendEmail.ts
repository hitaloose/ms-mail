import { functionAdapter } from "./adapter/function-adapter";
import { makeSendEmailController } from "./factories/make-send-email-controller";

export const sendEmail = functionAdapter(makeSendEmailController())