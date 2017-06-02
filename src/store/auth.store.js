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
}

const authStore = new AuthStore();
export default authStore;
