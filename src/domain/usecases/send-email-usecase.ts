export type ContactInput = {
  name: string
  email: string
}

export type SendEmailUsecaseInput = {
  to: ContactInput
  from: ContactInput
  subject: string
  content: string
}

export type SendEmailUsecaseOutput = {
  id: string
}

export interface SendEmailUsecase {
  run(data: SendEmailUsecaseInput): Promise<SendEmailUsecaseOutput>
}