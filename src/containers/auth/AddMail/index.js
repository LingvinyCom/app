// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
	ScrollView,
} from 'react-native';

import Title from '../../../components/Auth/Title/';
import Input from '../../../components/SimpleInput';
import CollapseMenu from './components/CollapseMenu/';
import * as Buttons from './../../../components/Buttons/';

import { signUp } from '../../../utils/request/';
import styles from './styles';


@inject((allStores) => ({
    auth: allStores.auth,
    app: allStores.app,
}))
export default class AddMail extends Component {
	registration() {
		this.props.app.showLoader = true;
		const payload = {
			email: this.props.auth.email,
			password: this.props.auth.password,
			hostName: this.props.auth.hostName,
			userName: this.props.auth.userName,
			hostPassword: this.props.auth.hostPassword,
			is_ssl: this.props.auth.useSsl,
			server_port: this.props.auth.serverPort,
		};

		signUp(payload)
			.then((data) => {
				this.props.auth.uid = data.lingviny_token;
				this.props.navigation.navigate('Congratulations');
			}).catch(() => {
			this.props.auth.requestError = 'Error';
		}).finally(() => {
			this.props.app.showLoader = false;
		});
	}

	render() {
		const { email, password } = this.props.auth;

		return (
			<View style={styles.screenWrapper}>
				<ScrollView>
					<View style={styles.pageWrapper}>
						<View style={styles.pageContent}>
							<Title text={'Add Email Account'}/>
							<View style={styles.pageForm}>
								<Input
									label={'EMAIL'}
									value={email}
									onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
									placeholder={"Enter an Email"}
								/>
								<Input
									label={'PASSWORD'}
									secureTextEntry={true}
									value={password}
									onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
									placeholder={"Enter a Password"}
								/>
							</View>
							<CollapseMenu auth={this.props.auth}/>
						</View>
						<View>
							<Buttons.Rounded
								text={'Done'}
								onPress={this.registration.bind(this)}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
