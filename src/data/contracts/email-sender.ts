import { Mail } from '../../domain/entities/mail'

export interface EmailSender {
  send(mail: Mail): Promise<void>
}