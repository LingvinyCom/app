// @flow

import { observable } from 'mobx';


class AppStore {
	@observable showLoader: boolean = false;
}

const appStore = new AppStore();

export default appStore;
