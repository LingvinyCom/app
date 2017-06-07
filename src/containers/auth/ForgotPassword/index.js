// @flow

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
	View,
	KeyboardAvoidingView,
} from 'react-native';

import Logotip from '../../../components/Auth/Logo';
import Title from '../../../components/Auth/Title/';
import Description from '../../../components/Auth/Description/';
import Input from '../../../components/SimpleInput/';
import * as Modals from '../../../components/Modals';
import * as Buttons from '../../../components/Buttons/';

import {resetPassword} from '../../../utils/request/';

import styles from './styles';

@inject((allStores) => {
	return {
		auth: allStores.auth,
		app: allStores.app,
	};
})
@observer
export default class ForgotPassword extends Component {
	state = {
		isShowErrorModal: Boolean,
		isShowInfoModal: Boolean,
		properties: Object,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowErrorModal: false,
			isShowInfoModal: false,
			properties: {},
		};
	}

	recoverPassword() {
		this.props.app.showLoader = true;

		resetPassword(this.props.auth.email)
			.then((data) => {
        this.setState({ isShowInfoModal: true });
      }).catch(() => {
        this.setState({ isShowErrorModal: true });
      }).finally(() => {
        this.props.app.showLoader = false;
      });
  }

	render() {
		return (
			<KeyboardAvoidingView
				behavior="position"
				style={styles.forgotPassWrapper}
			>
				<Logotip/>
				<Title text={'Forgot Password?'}/>
				<Description
					text={`Please enter your email. We will send your password to this email account`}
				/>
				<View style={styles.form}>
					<Input
						label={'EMAIL'}
						value={this.props.auth.email}
						onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
						placeholder={'Enter an Email'}
						keyboardType="email-address"
					/>
					<Buttons.Rounded
						text={'Recover Password'}
						onPress={this.recoverPassword.bind(this)}
					/>
				</View>
				<Modals.Notify
					show={this.state.isShowErrorModal}
					type={'error'}
					title={'Rocever password'}
					description={'Incorrect Email'}
					btnLabel={'Try again'}
					hideModal={() => this.setState({ isShowErrorModal: false })}
				/>
				<Modals.Notify
					show={this.state.isShowInfoModal}
					type={'information'}
					title={'Rocever password'}
					description={'We just sent you an email with instructions'}
					btnLabel={'Ok'}
					hideModal={() => {
						this.setState(
							{ isShowInfoModal: false },
							() => this.props.navigation.navigate('SignIn'),
						);
					}}
				/>
			</KeyboardAvoidingView>
		);
	}
}
