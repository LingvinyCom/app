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
				/**
				 * If no content resolve();
				 * Needed only for 204 status code.
				 */
				if (response.status === 204) {
					return resolve();
				} else {
					return response.json();
				}
			})
			.then((data) => {
				switch (data._code) {
						case 200:
							resolve(data);
							break;
						default:
							reject(data);
							break;
					}
			});
	});
}
