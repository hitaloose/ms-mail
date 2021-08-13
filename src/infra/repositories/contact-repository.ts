import { v4 as uuid } from 'uuid'

import { SelectOrInsertContact, SelectOrInsertContactInput } from '../../data/contracts/select-or-insert-contact'
import { Contact } from '../../domain/entities/contact';

export class ContactRepository implements SelectOrInsertContact {
  private static CONTACTS: Contact[] = []

  async selectOrInsert(data: SelectOrInsertContactInput): Promise<Contact> {
    const contact = ContactRepository.CONTACTS.find(item => item.email === data.email)

    if (contact) {
      return contact
    }

    const newContact: Contact = {
      id: uuid(),
      name: data.name,
      email: data.email
    }

    ContactRepository.CONTACTS.push(newContact)

    return newContact
  }
}