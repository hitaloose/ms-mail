import { SendEmailController } from "../../application/controllers/send-email-controller"
import { makeSendEmailUsecase } from "./make-send-email-usecase"

export const makeSendEmailController = () => {
  return new SendEmailController(makeSendEmailUsecase())
}