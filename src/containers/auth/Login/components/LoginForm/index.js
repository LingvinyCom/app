// @flow

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	// Image,
} from 'react-native';
import { observer } from 'mobx-react';
import Input from '../../../../../components/SimpleInput/';
import RoundedButton from '../../../../../components/RoundedButton/';


@observer
export default class LoginForm extends Component {

	render() {
		const { email, password, reqError } = this.props.auth;
		const maxLength = 30;
		/**
		 *  @TODO: Show/hide error auth modal depends on  reqError.
		 *  Place maxLength to global config.
		 */
		return (
			<View style={styles.loginForm}>
				{/*<Image
					style={styles.logo}
					source={require('./../../../*.png')}
				/>*/}
				<Input
					label={'EMAIL'}
					value={email}
					onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
					maxLength={maxLength}
				/>
				<Input
					label={'PASSWORD'}
					secureTextEntry={true}
					value={password}
					onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
					maxLength={maxLength}
				/>
				<RoundedButton
					text={'Login'}
					onPress={this.props.onPress}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
