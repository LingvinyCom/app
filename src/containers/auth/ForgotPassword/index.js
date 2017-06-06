// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
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

import { resetPassword } from '../../../utils/request/';

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
  }

  constructor(props: Object) {
  super(props);
    this.state = {
      isShowErrorModal: false,
    };
  }

	recoverPassword() {
    this.props.app.showLoader = true;

    resetPassword(this.props.auth.email)
      .then((data) => {
				console.log('SUCCESS');
        this.props.navigation.navigate('SignIn');
      }).catch(() => {
        this.props.auth.requestError = 'Error';
         this.setState({ isShowErrorModal: true });
      }).finally(() => {
        this.props.app.showLoader = false;
      });
  }

	render() {
		return (
			<KeyboardAvoidingView
				behavior="padding"
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
					/>
					<Buttons.Rounded
						text={'Recover Password'}
						onPress={this.recoverPassword.bind(this)}
					/>
				</View>
				<Modals.Error
          modalVisible={this.state.isShowErrorModal}
          hideModal={ () => this.setState({ isShowErrorModal: false }) }
          titleError={'Unable to Login'}
          descriptionError={"Incorrect Username or Password"}
          textBtn={'Try again'}
        />
			</KeyboardAvoidingView>
		);
	}
}
