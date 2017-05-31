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

	login() {
		const payload = {
				email: this.props.auth.email,
				password: this.props.auth.password,
		};

		this.props.auth.login(
			'login/',
			payload,
			this.onSuccess,
			this.onFail,
		);
	}

	onSuccess() {
		console.log('SUCCES LOGIN');
	}

	onFail() {
		console.log('LOGIN FAIL');
	}

	render() {
		return (
			<View style={styles.loginForm}>
				{/*<Image
					style={styles.logo}
					source={require('./../../../*.png')}
				/>*/}
				<Input
					label={'EMAIL'}
					value={this.props.auth.email}
					onChangeText={(email) => this.props.auth.setValue({'email': email})}
					maxLength={30}
				/>
				<Input
					label={'PASSWORD'}
					secureTextEntry={true}
					value={this.props.auth.password}
					onChangeText={(password) => this.props.auth.setValue({'password': password})}
					maxLength={30}
				/>
				<RoundedButton
					text={'Login'}
					onPress={this.login.bind(this)}
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
