import { SendEmailUsecase } from "../../domain/usecases/send-email-usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse } from "../contracts/http";

export class SendEmailController implements Controller {
  constructor(
    private readonly sendEmailUseCase: SendEmailUsecase
  ) { }

  async run(request: HttpRequest): Promise<HttpResponse> {
    try {
      const { to, from, subject, content } = request.body

      if (!to.name) {
        return { statusCode: 400 }
      }

      if (!to.email) {
        return { statusCode: 400 }
      }

      if (!from.name) {
        return { statusCode: 400 }
      }

      if (!from.email) {
        return { statusCode: 400 }
      }

      if (!subject) {
        return { statusCode: 400 }
      }

      if (!content) {
        return { statusCode: 400 }
      }

      const output = await this.sendEmailUseCase.run(request.body)

      return { statusCode: 200, body: output }
    } catch (err) {
      return { statusCode: 500, body: err }
    }
  }
}