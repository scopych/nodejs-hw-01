import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
	try {
		const  data = await readFile(PATH_DB, 'utf8');
		return data;
	} catch (error) {
		console.error('there was an error:', error.message);
	}
}

readContacts();
