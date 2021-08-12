import { SendEmailUsecase, SendEmailUsecaseInput, SendEmailUsecaseOutput } from "../../domain/usecases/send-email-usecase";
import { EmailSender } from "../contracts/email-sender";
import { InsertMail } from "../contracts/insert-mail";
import { SelectOrInsertContact } from "../contracts/select-or-insert-contact";
import { UpdateMailFinishedAt } from "../contracts/update-mail-finished-at";

export class SendEmail implements SendEmailUsecase {
  constructor(
    private readonly selectOrInsertContact: SelectOrInsertContact,
    private readonly insertMail: InsertMail,
    private readonly emailSender: EmailSender,
    private readonly updateMailFinishedAt: UpdateMailFinishedAt
  ) { }

  async run(data: SendEmailUsecaseInput): Promise<SendEmailUsecaseOutput> {
    const to = await this.selectOrInsertContact.selectOrInsert({
      name: data.to.name,
      email: data.to.email
    })

    const from = await this.selectOrInsertContact.selectOrInsert({
      name: data.from.name,
      email: data.from.email
    })

    const mail = await this.insertMail.insert({
      to,
      from,
      subject: data.subject,
      content: data.content,
    })

    await this.emailSender.send(mail)

    await this.updateMailFinishedAt.updateFinishedAt(mail.id, new Date())

    return { id: mail.id }
  }
}