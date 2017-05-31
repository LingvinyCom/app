// @flow


import { API_URL } from '../../config/api.config';


/**
 * Common post request
 *
 * @param {string} url - url for request
 * @param {Object} body - body data
 *
 * @returns {Promise}
 */
export function postRequest(url: string, body: Object): Promise<> {
	return fetch(`${API_URL}${url}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
	});
}
