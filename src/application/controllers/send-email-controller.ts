import { SendEmailUsecase } from "../../domain/usecases/send-email-usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";

export class SendEmailController implements Controller {
  constructor(
    private readonly sendEmailUseCase: SendEmailUsecase
  ) { }

  async run(request: HttpRequest): Promise<HttpResponse> {
    await this.sendEmailUseCase.run(request.body)

    return { statusCode: 204 }
  }
}