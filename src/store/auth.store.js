// @flow


import { observable, action } from 'mobx';

import { login } from './../utils/request/';



class AuthStore {
  @observable email: string = '';
  @observable password: string = '';

	@observable hostName: string = '';
	@observable userName: string = '';
	@observable hostPassword: string = '';
	@observable useSsl: boolean = false;
	@observable serverPort: number = 0;

  @observable uid: string = '';
  @observable requestError: string = '';

  @action setValue(params: Object): void {
    Object.assign(this, params);
  }

  @action login(email: string, password: string): void  {
    login(email, password).then((res) => {
			switch (res.status) {
				case 200:
					// @TODO: CHECK if success to write value.
					this.uid = 'Token';
					break;
				default:
					// @TODO: CHECK if error to write value.
					this.requestError = 'Error';
					break;
			}
		});
  }
}

const authStore = new AuthStore();
export default authStore;
