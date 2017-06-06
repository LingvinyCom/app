// @flow

import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {View} from 'react-native';

import Logotip from '../../../components/Auth/Logo';
import Title from '../../../components/Auth/Title/';
import Form from '../../../components/Auth/Form/';
import Footer from '../../../components/Auth/Footer/';
import * as Modals from '../../../components/Modals/';

import {login} from '../../../utils/request/';

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
				this.props.auth.uid = data.lingviny_token;
				this.props.navigation.navigate('Inbox');
			}).catch(() => {
			this.props.auth.requestError = 'Error';
			this.setState({isShowErrorModal: true});
		}).finally(() => {
			this.props.app.showLoader = false;
		});
	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={styles.signinWrapper}>
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
				<Modals.Error
					modalVisible={this.state.isShowErrorModal}
					hideModal={ () => this.setState({isShowErrorModal: false}) }
					titleError={'Unable to Login'}
					descriptionError={"Incorrect Username or Password"}
					textBtn={'Try again'}
				/>
			</View>
		);
	}
}
