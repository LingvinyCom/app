// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Title from '../components/Title/';
import Form from '../components/Form/';
import Footer from '../components/Footer/';

@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class Login extends Component {

  login() {
		this.props.auth.login(
			this.props.auth.email,
			this.props.auth.password,
		);
	}

  /**
   * @TODO: Footer show/hide depends on Route.
   */
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.loginWrapper}>
        <Title text={'Login to Continue'}/>
        <Form
          auth={this.props.auth}
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

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
