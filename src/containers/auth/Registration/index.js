// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Title from '../components/Title/';
import Description from '../components/Description/';
import Form from '../components/Form/';
import RoundedButton from './../../../components/RoundedButton/';
import Footer from '../components/Footer/';

@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class Registration extends Component {

  registration() {
		console.log(1);
	}

  /**
   * @TODO: Footer show/hide depends on Route.
   */
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.loginWrapper}>
        <Title text={'New to Lingviny?'}/>
				<Description
					text={
						`Please enter your credentials for the 
						existing mailbox you\'ll be working with and we\'ll 
						take care of all the rest`
					}/>
				<Form
          auth={this.props.auth}
          onPress={this.registration.bind(this)}
          component={
           <RoundedButton
            text={'Choose Mail Service'}
            onPress={() => console.log('SHOW MODAL SELECT SERVICE')}
            />
          }
        />
				<Footer
					text={'Already a member?'}
					clickableText={'Login'}
					onPressText={() => navigate('Login')}
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
