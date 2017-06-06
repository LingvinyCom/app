import React, {Component} from 'react';
import {StackNavigator, DrawerNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Auth from './auth';
import Main from './main';
import Sidebar from './sidebar';

import styles from './styles';

class Navigator extends Component {
	setNavigatorConfig() {
		// if (this.props.auth.isHydrated && this.props.auth.uid) {
		//     return {
		//     initialRouteName: 'MainTabs'
		//     };
		// }
		return {
			navigationOptions: {
				header: null,
			},
			//  initialRouteName: 'FirstLaunch',
			 initialRouteName: 'Inbox',
			// initialRouteName: 'Registration',
			// initialRouteName: 'SignIn',
			// initialRouteName: 'Login',
			// initialRouteName: 'AddMail',
			// initialRouteName: 'ForgotPassword',
			// initialRouteName: 'Sidebar',
		};
	}



	initRouter() {
		return DrawerNavigator({...Sidebar}, this.setNavigatorConfig());
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
