import { EmailSender } from "../../data/contracts/email-sender";
import { Mail } from "../../domain/entities/mail";

export class EmailProvider implements EmailSender {
  async send(mail: Mail): Promise<void> {
  }
}