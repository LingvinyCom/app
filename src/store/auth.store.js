// @flow

import { observable, action } from 'mobx';
import { API_URL } from '../config/api.config';

class AuthStore {
  @observable email: string = '';
  @observable password: string = '';

  @action setValue(params: Object): void {
    Object.assign(this, params);
  }

  @action login(url: string, payload: Object, onSuccess: Function, onFail: Function): void  {
    fetch(`${API_URL}${url}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		}).then(function(res) {
			switch (res.status) {
				case 200:
					onSuccess();
					break;
				default:
					onFail();
					break;
			}
		});
  }
}

const authStore = new AuthStore();
export default authStore;
