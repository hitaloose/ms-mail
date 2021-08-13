import { Contact } from "../../domain/entities/contact";

export type SelectOrInsertContactInput = {
  name: string
  email: string
}

export interface SelectOrInsertContact {
  selectOrInsert(data: SelectOrInsertContactInput): Promise<Contact>
}