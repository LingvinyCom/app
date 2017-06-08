import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Auth from './auth';
import Main from './main';
import Sidebar from './sidebar';

import styles from './styles';

@inject((allStores) => {
	return {
		auth: allStores.auth,
	};
})
class Navigator extends Component {
	setNavigatorConfig() {
		return {
			navigationOptions: {
				header: null,
			},
			initialRouteName: 'FirstLaunch',
			// initialRouteName: 'Inbox',
			// initialRouteName: 'Registration',
			// initialRouteName: 'SignIn',
			// initialRouteName: 'Login',
			// initialRouteName: 'AddMail',
			// initialRouteName: 'ForgotPassword',
			// initialRouteName: 'Sidebar',
			// initialRouteName: 'ChangePasswosrd',
		};
	}

	initRouter() {
		const RootNavigator = StackNavigator({
			Drawer: {
				screen: Sidebar,
			},
			...Auth,
			...Main,
			},
			this.setNavigatorConfig(),
		);
		return RootNavigator;
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		// if (!this.props.auth.isHydrated) {
		// 	return null;
		// };
		const Router = this.initRouter();
		return <Router style={styles.routerContainer}/>;
	}
}

export default Navigator;
