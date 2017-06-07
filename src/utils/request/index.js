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
	return postRequest('api/auth/login', { email, password });
}


/**
 * Reset Password request
 *
 * @param {string} email - email
 *
 * @returns {Promise}
 */
export function resetPassword(email: string): Promise<> {
	return postRequest('api/auth/password_reset', { email });
}

/**
 * Signup to reate account request
 *
 * @param {Object} payload - payload
 *
 * @returns {Promise}
 */
export function signUp(payload: Object): Promise<> {
	return postRequest('api/client/create', payload);
}
