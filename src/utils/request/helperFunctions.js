// @flow

import { API_URL } from '../../config/api.config';


function checkResponseData(response, action) {
	return response.text().then((text) => {
		return text ? action(JSON.parse(text)) : action({});
	});
}


function handleResStatus(response, reject, resolve) {
	switch (response.status) {
		case 200:
			checkResponseData(response, resolve);
			break;
		case 204:
			checkResponseData(response, resolve);
			break;
		case 400:
			checkResponseData(response, reject);
			break;
		default:
			checkResponseData(response, reject);
			break;
	}
}


/**
 * Common POST request
 *
 * @param {string} url - url for request
 * @param {Object} body - body data
 *
 * @returns {Promise}
 */
export function postRequest(url: string, body: Object): Promise<> {
	const authorization = body.token ? { 'Authorization' : body.token} : null;
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		...authorization,
	};

	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
				method: 'POST',
				headers,
				body: JSON.stringify(body)
			})
			.then((response) => {
				handleResStatus(response, reject, resolve);
			});
	});
}


/**
 * Common GET request
 *
 * @param {string} url - url for request
 *
 * @returns {Promise}
 */
export function getRequest(url: string): Promise<> {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				handleResStatus(response, reject, resolve);
			});
	});
}
