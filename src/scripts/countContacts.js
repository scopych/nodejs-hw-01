import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
	const contactsDB = await readContacts();
  let contacts = JSON.parse(contactsDB);
	return contacts.length;
};

console.log(await countContacts());
