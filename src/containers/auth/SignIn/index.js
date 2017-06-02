// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { View } from 'react-native';

import Logotip from '../components/Logo';
import Title from '../components/Title/';
import Form from '../components/Form/';
import Footer from '../components/Footer/';

import { login } from '../../../utils/request/';

import styles from './styles';

@inject((allStores) => ({
    auth: allStores.auth,
    app: allStores.app,
}))
export default class SignIn extends Component {

  login() {
    this.props.app.showLoader = true;
    login(
      this.props.auth.email,
      this.props.auth.password)
			.then((data) => {
				switch (data._code) {
					case 200:
						this.props.auth.uid = data.lingviny_token;
            this.props.navigation.navigate('AddMail');
						break;
					default:
            this.props.auth.requestError = 'Error';
						break;
				}
        this.props.app.showLoader = false;
		});
	}

  render() {
    const { navigate } = this.props.navigation;

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
      </View>
    );
  }
}

