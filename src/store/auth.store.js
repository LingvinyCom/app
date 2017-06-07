// @flow

import { observable, action } from 'mobx';


class AuthStore {
  @observable email: string = 'tech@lingviny.com';
  @observable password: string = 'secretstring';

  @observable selectedDomain: Object = {};

  @observable hostName: string = '';
	@observable userName: string = '';
	@observable hostPassword: string = '';
	@observable useSsl: boolean = false;
	@observable serverPort: string = '';

  @observable uid: string = '';

  @action setValue(params: Object): void {
    Object.assign(this, params);
  }
}

const authStore = new AuthStore();
export default authStore;
