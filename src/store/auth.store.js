// @flow

import { AsyncStorage } from 'react-native';
import { observable, action } from 'mobx';
import { persist, create } from 'mobx-persist';

class AuthStore {
  @observable email: string = 'tech@lingviny.com';
  @observable password: string = 'secretstring';

  @observable selectedDomain: Object = {};

  @observable host: string = '';
	@observable username: string = '';
	@observable hostPassword: string = '';
	@observable useSsl: boolean = false;
	@observable serverPort: string = '';

  @persist('object') @observable userAccount: Object = {};
  @observable isHydrated: boolean = false;
  @observable engine = [];
  @persist @observable showLaunch: boolean = true;

  @action setValue(params: Object): void {
    Object.assign(this, params);
  }
}

const authStore = new AuthStore();
const hydrate = create({ storage: AsyncStorage });
export default authStore;


hydrate('auth', authStore).then((data) => {
  authStore.setValue({ 'isHydrated': true });
});
