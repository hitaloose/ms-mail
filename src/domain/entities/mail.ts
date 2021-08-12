import { Contact } from './contact'

export type Mail = {
  id: string
  to: Contact
  from: Contact
  subject: string
  content: string
  createdAt: Date
  finishedAt: Date | null
}