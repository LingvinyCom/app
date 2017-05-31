import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from './auth';

class Navigator extends Component {
	constructor(props: Object): void {
		super(props);
	}

	setNavigatorConfig() {
	// if (this.props.auth.isHydrated && this.props.auth.uid) {
	//     return {
	//     initialRouteName: 'MainTabs'
	//     };
	// }
		return {
			// initialRouteName: 'Registration',
			// initialRouteName: 'Login',
			initialRouteName: 'FirstLaunch',
		};
	}

	initRouter() {
		return StackNavigator({ ...Auth, }, this.setNavigatorConfig());
	}

	render() {
		// if (!this.props.auth.isHydrated) {
		// 	return null;
		// };
		const Router = this.initRouter();
		return <Router />;
	}
}

export default Navigator;
