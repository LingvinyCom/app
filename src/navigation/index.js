import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from './auth';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';

class Navigator extends Component {
	setNavigatorConfig() {
	// if (this.props.auth.isHydrated && this.props.auth.uid) {
	//     return {
	//     initialRouteName: 'MainTabs'
	//     };
	// }
		return {
			initialRouteName: 'Inbox',
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
    componentDidMount() {
        SplashScreen.hide();
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
