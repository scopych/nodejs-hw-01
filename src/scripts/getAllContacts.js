import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
	const contactsDB = await readContacts();
  return JSON.parse(contactsDB);
};

console.log(await getAllContacts());
