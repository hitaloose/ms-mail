import { controllerAdapter } from "../adapter/controller-adapter";
import { makeSendEmailController } from "../factories/make-send-email-controller";

export default controllerAdapter(makeSendEmailController())