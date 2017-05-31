// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { View } from 'react-native';

import Logotip from '../components/Logo';
import Title from '../components/Title/';
import Form from '../components/Form/';
import Footer from '../components/Footer/';

import styles from './styles';

@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class SignIn extends Component {

  login() {
		this.props.auth.login(
			this.props.auth.email,
			this.props.auth.password,
		);
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
          onPress={this.login.bind(this)}
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

