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
	console.log('DATA ===>', body);
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
					case 204:
						resolve();
						break;
					case 400:
						reject();
						break;
					default:
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
