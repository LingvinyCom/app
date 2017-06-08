// @flow

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {KeyboardAvoidingView} from 'react-native';

import Logotip from '../../../components/Auth/Logo';
import Title from '../../../components/Auth/Title/';
import Form from '../../../components/Auth/Form/';
import Footer from '../../../components/Auth/Footer/';
import * as Modals from '../../../components/Modals/';

import { login } from '../../../utils/request/';

import styles from './styles';

@inject((allStores) => ({
	auth: allStores.auth,
	app: allStores.app,
}))
export default class SignIn extends Component {
	state = {
		isShowErrorModal: Boolean,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowErrorModal: false,
		};
	}

	login() {
		this.props.app.showLoader = true;

		login(this.props.auth.email, this.props.auth.password)
			.then((data) => {
				this.props.auth.userAccount.uid = data.lingviny_token;
				this.props.navigation.navigate('Drawer');
			}).catch((error) => {
			this.setState({isShowErrorModal: true});
			}).finally(() => {
				this.props.app.showLoader = false;
			});
	}

	render() {
		const {navigate} = this.props.navigation;
		return (
			<KeyboardAvoidingView
				style={styles.signinWrapper}
				behavior="position"
			>
				<Logotip/>
				<Title text={'Login to Continue'}/>
				<Form
					auth={this.props.auth}
					isShowForgotPassword={true}
					onPressForgotPassword={() => navigate('ForgotPassword')}
					onPress={this.login.bind(this)}
					buttonLabel={'Login'}
				/>
				<Footer
					text={'New User?'}
					clickableText={'Sign Up'}
					onPressText={() => navigate('Registration')}
				/>
				<Modals.Notify
					show={this.state.isShowErrorModal}
					type={'error'}
					title={'Unable to Login'}
					description={'Incorrect Username or Password'}
					btnLabel={'Try again'}
					hideModal={() => this.setState({isShowErrorModal: false})}
				/>
			</KeyboardAvoidingView>
		);
	}
}
