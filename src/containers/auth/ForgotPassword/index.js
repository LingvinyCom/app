// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Logotip from '../components/Logo';
import Title from '../components/Title/';
import Description from '../components/Description/';
import Input from '../../../components/SimpleInput/';
import RoundedButton from '../../../components/RoundedButton/';

import styles from './styles';

export default class ForgotPassword extends Component {
	render() {
		return (
			<View style={styles.forgotPassWrapper}>
				<Logotip/>
				<Title text={'Forgot Password?'}/>
				<Description
					text={`Please enter your email. We will send your password to this email account`}
				/>
				<Input
					label={'EMAIL'}
					value={'...'}
					onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
					placeholder={'Enter an Email'}
				/>
				<RoundedButton
					text={'FORGET????'}
					onPress={() => console.log('onPress ')}
				/>
			</View>
		);
	}
}
