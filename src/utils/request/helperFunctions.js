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
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}${url}`, {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body)
			})
			.then((response) => {
				switch (response.status) {
					case 200:
						checkResponseData(response, resolve);
						break;
					case 204:
						checkResponseData(response, resolve);
						break;
					case 400:
						checkResponseData(response, resolve);
						break;
					default:
						checkResponseData(response, reject);
						break;
				}
			});
	});

}

function checkResponseData(response, action) {
	return response.text().then((text) => {
		return text ? action(JSON.parse(text)) : action({});
	});
}
