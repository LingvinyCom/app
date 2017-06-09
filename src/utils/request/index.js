// @flow


import { postRequest, getRequest } from './helperFunctions';


/**
 * Login request
 *
 * @param {string} email - email
 * @param {string} password - password
 *
 * @returns {Promise}
 */
export function login(email: string, password: string): Promise<> {
	return postRequest('auth/login', { email, password });
}


/**
 * Reset Password request
 *
 * @param {string} email - email
 *
 * @returns {Promise}
 */
export function resetPassword(email: string): Promise<> {
	return postRequest('auth/reset-password', { email });
}

/**
 * Signup to create account request
 *
 * @param {Object} payload - payload
 *
 * @returns {Promise}
 */
export function signUp(payload: Object): Promise<> {
	return postRequest('client', payload);
}


/**
 * Logout user request
 *
 * @param {Object} token - token
 *
 * @returns {Promise}
 */
export function logout(token: string): Promise<> {
 return postRequest('auth/logout', { token });
}


/**
 * Get Engine
 *
 * @param {Object} payload - payload
 *
 * @returns {Promise}
 */
export function getEngine(): Promise<> {
	return getRequest('engine');
}
