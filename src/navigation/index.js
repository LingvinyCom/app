import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Auth from './auth';
import Main from './main';
import Sidebar from './sidebar';

import styles from './styles';

@inject((allStores) => ({
		auth: allStores.auth,
}))
@observer
export default class Navigator extends Component {
	setNavigatorConfig() {
		return {
			navigationOptions: {
				header: null,
			},
			initialRouteName: this.props.auth.userAccount.uid ? 'Drawer' : this.props.auth.showLaunch ? 'FirstLaunch' : 'Registration',
			/**
				* Routing containers.
					[
						'FirstLaunch',
						'Drawer',
						'Inbox',
						'Registration',
						'SignIn',
						'Login',
						'AddMail',
						'ForgotPassword',
						'Sidebar',
						'ChangePasswosrd',
						'OrdersHistory',
						'PaymentsHistory',
						'AutoTranslation',
						'Signature',
					]
			*/
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
		if (!this.props.auth.isHydrated) {
			return null;
		}
		const Router = this.initRouter();
		return <Router style={styles.routerContainer}/>;
	}
}
