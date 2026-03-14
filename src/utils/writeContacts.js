import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
	try {
		await writeFile(PATH_DB, updatedContacts, 'utf8');
		console.log('Дані успішно записані у файл.');
	} catch (err) {
  // When a request is aborted - err is an AbortError
  	console.error(err);
	}	
};

