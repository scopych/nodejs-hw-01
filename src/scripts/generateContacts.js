import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const contactsDB = await readContacts();
    const contactPromises = Array.from({ length: number }, createFakeContact);
    const createdContacts = await Promise.all(contactPromises);
		let contacts = contactsDB ? JSON.parse(contactsDB) : [];

    contacts.push(...createdContacts);
    await writeContacts(JSON.stringify(contacts, null, 2)); 
  } catch (error) {
    console.error("Error generating contacts:", error.message);
  }
};

generateContacts(5);