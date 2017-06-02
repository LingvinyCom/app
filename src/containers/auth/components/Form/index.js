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

	// static defaultProps = {}

	render() {
		const { email, password, requestError } = this.props.auth;
		const { component, isShowForgotPassword, onPressForgotPassword } = this.props;
		return (
			<View style={styles.form}>
				<Input
					label={'EMAIL'}
					value={email}
					onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
					placeholder={'Enter an Email'}
					underlineColorAndroid={'transparent'}
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
					underlineColorAndroid={'transparent'}
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
					text={'Login'}
					onPress={this.props.onPress}
        />
			</View>
		);
	}
}
