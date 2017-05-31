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
		return postRequest('login/', { email, password });
}



