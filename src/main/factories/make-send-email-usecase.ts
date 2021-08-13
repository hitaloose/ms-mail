import { SendEmail } from "../../data/usecases/send-email-usecase"
import { EmailProvider } from "../../infra/providers/email-provider"
import { ContactRepository } from "../../infra/repositories/contact-repository"
import { MailRepository } from "../../infra/repositories/mail-repository"

export const makeSendEmailUsecase = () => {
  const contactRepository = new ContactRepository()
  const mailRepository = new MailRepository()
  const emailProvider = new EmailProvider()

  return new SendEmail(contactRepository, mailRepository, emailProvider, mailRepository)
}