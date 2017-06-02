// @flow


import { postRequest } from './helperFunctions';


/**
 * Login request
 *
 * @param {string} email - email
 * @param {string} password - password
 *
 * @returns {Promise}
 */
export function login(email: string, password: string): Promise<> {

		email = 'tech@lingviny.com';
		password = 'secretstring';

		console.debug('DONT FORGET TO REMOVE:', email, password);
		return postRequest('api/auth/login', { email, password });
}



