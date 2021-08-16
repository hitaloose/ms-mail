import nodemailer from 'nodemailer'

import { EmailSender } from "../../data/contracts/email-sender";
import { Mail } from "../../domain/entities/mail";

export class EmailProvider implements EmailSender {

  async send(mail: Mail): Promise<void> {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6d23d3cfb070fd",
        pass: "d9d0806eb1bc7e"
      }
    });

    await transport.sendMail({
      to: {
        name: mail.to.name,
        address: mail.to.email
      },
      from: {
        name: mail.from.name,
        address: mail.from.email
      },
      subject: mail.subject,
      text: mail.content
    })
  }
}