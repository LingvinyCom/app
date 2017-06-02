// @flow

import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
} from 'react-native';
import { observer } from 'mobx-react';
import Input from '../../../../components/SimpleInput/';
import RoundedButton from '../../../../components/RoundedButton/';

import styles from './styles';


@observer
export default class Form extends Component {
	// props = {}

	static defaultProps: {
		buttonLabel: string,
		auth: Object,
		isShowForgotPassword: Boolean,
		onPressForgotPassword: Function,
	}

	static defaultProps = {
		buttonLabel: 'Continue',
		isShowForgotPassword: false,
		onPressForgotPassword: () => console.log('onPressForgotPassword'),
	}

	render() {
		const { email, password, requestError } = this.props.auth;
		const { component, isShowForgotPassword, onPressForgotPassword, buttonLabel } = this.props;

		return (
			<View style={styles.form}>
				<Input
					label={'EMAIL'}
					value={email}
					onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
					placeholder={'Enter an Email'}
				/>
				{
					component
					? component
					: null
				}
				<Input
					label={'PASSWORD'}
					secureTextEntry={true}
					value={password}
					onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
					placeholder={'Enter a Password'}
				/>
				{
					isShowForgotPassword &&
					<View style={styles.forgotPasswordWrapper}>
						<TouchableOpacity
							style={styles.forgotPasswordBtn}
							onPress={onPressForgotPassword}
							>
							<Text style={styles.forgotPasswordText}>
								Forgot Password
							</Text>
						</TouchableOpacity>
					</View>
				}
				<RoundedButton
					text={buttonLabel}
					onPress={this.props.onPress}
        />
			</View>
		);
	}
}
