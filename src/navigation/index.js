import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from './auth';

import styles from './styles';

class Navigator extends Component {
	setNavigatorConfig() {
	// if (this.props.auth.isHydrated && this.props.auth.uid) {
	//     return {
	//     initialRouteName: 'MainTabs'
	//     };
	// }
		return {
			initialRouteName: 'FirstLaunch',
			// initialRouteName: 'Registration',
			// initialRouteName: 'SignIn',
			// initialRouteName: 'Login',
			// initialRouteName: 'AddMail',
			// initialRouteName: 'ForgotPassword',
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
		return <Router style={styles.routerContainer} />;
	}
}

export default Navigator;
