import { Contact } from '../../domain/entities/contact'
import { Mail } from '../../domain/entities/mail'

export type InsertMailInput = {
  to: Contact
  from: Contact
  subject: string
  content: string
}

export interface InsertMail {
  insert(data: InsertMailInput): Promise<Mail>
}