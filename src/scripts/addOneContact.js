import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
	try {
		const contactsDB = await readContacts();
	  let contacts = JSON.parse(contactsDB);
		const createdContact = await  createFakeContact();
	  contacts.push(createdContact);
	  await writeContacts(JSON.stringify(contacts));
	} catch (error) {
		console.error("Error reading, writing or creating contacts: ", error.message);
	}
};

addOneContact();
