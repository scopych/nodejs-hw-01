import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
	try {
		const contactsDB = await readContacts();
	  let contacts = JSON.parse(contactsDB);

		if (contacts.length > 0) {
			contacts.pop();
			await writeContacts(JSON.stringify(contacts));
		}
	} catch (error) {
		console.error("Error reading or writing contacts: ", error.message);
	}
};

removeLastContact();
