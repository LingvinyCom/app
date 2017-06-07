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
import * as Modals from './../../../components/Modals/';

import { signUp } from '../../../utils/request/';
import { checkFields } from '../../../utils/request/helperFunctions';
import styles from './styles';


@inject((allStores) => ({
    auth: allStores.auth,
    app: allStores.app,
}))
export default class AddMail extends Component {
	state = {
		isShowErrorModal: Boolean,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowErrorModal: false,
		};
	}

	signUp() {
		// const checked = checkFields([]);
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
				this.setState({isShowErrorModal: true});
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
									keyboardType="email-address"
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
								onPress={this.signUp.bind(this)}
							/>
						</View>
					</View>
				</ScrollView>
				<Modals.Error
					modalVisible={this.state.isShowErrorModal}
					hideModal={ () => this.setState({isShowErrorModal: false}) }
					titleError={'Unable to Login'}
					descriptionError={"Incorrect Username or Password"}
					textBtn={'Try again'}
				/>
			</View>
		);
	}
}
