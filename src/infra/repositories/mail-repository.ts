import { v4 as uuid } from 'uuid'

import { InsertMail, InsertMailInput } from '../../data/contracts/insert-mail'
import { UpdateMailFinishedAt } from '../../data/contracts/update-mail-finished-at';
import { Mail } from '../../domain/entities/mail';

export class MailRepository implements InsertMail, UpdateMailFinishedAt {
  private static MAILS: Mail[] = []

  async updateFinishedAt(mailId: string, finishedAt: Date): Promise<void> {
    const mailIndex = MailRepository.MAILS.findIndex(item => item.id === mailId)

    MailRepository.MAILS[mailIndex].finishedAt = finishedAt
  }

  async insert(data: InsertMailInput): Promise<Mail> {
    const newMail: Mail = {
      id: uuid(),
      to: data.to,
      from: data.from,
      subject: data.subject,
      content: data.content,
      createdAt: new Date(),
      finishedAt: null
    }

    MailRepository.MAILS.push(newMail)

    return newMail
  }
}