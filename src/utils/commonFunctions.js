// @flow

import _ from 'lodash';



/**
 * Check if required form fields are empty.
 *
 * @param {Array} fields - fields
 *
 * @returns {Object}
 */
export function checkFields(fields: Array<any>): Object {
	let checked = {
		error: false,
		message: '',
	};

	fields.forEach(field => {
		if ((_.isString(field) && field.length === 0) ||
				(_.isObject(field) && _.isNil(field)) ||
				(_.isNumber(field) && _.isNil(field)) ||
				_.isNil(field)) {

			checked = {
				error: true,
				message: 'Please fill out all fields or select email engine.',
			};
		}
	});
	return checked;
}
