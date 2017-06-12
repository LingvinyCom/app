// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
	ScrollView,
} from 'react-native';

import Title from '../../../components/Auth/Title/';
import Input from '../../../components/SimpleInput/';
import CollapseMenu from './components/CollapseMenu/';
import * as Buttons from './../../../components/Buttons/';
import * as Modals from './../../../components/Modals/';

import { signUp } from '../../../utils/request/';
import { checkFields } from '../../../utils/commonFunctions';

import styles from './styles';


@inject((allStores) => ({
    auth: allStores.auth,
    app: allStores.app,
}))
export default class AddMail extends Component {
	state = {
		isShowErrorModal: Boolean,
		propsModal: Object,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowErrorModal: false,
			propsModal: {},
		};
	}

	signUp() {
		const {
			email, password, host, username, hostPassword, serverPort, useSsl,
		} = this.props.auth;
		const checked = checkFields([
			email, password, host, username, hostPassword, serverPort, useSsl
		]);

		if (!checked.error) {
			this.props.app.showLoader = true;
			const payload = {
				email: email,
				password: password,
				new_engine: {
					host,
					username,
					password: hostPassword,
					server_port: serverPort,
					is_ssl: useSsl,
				}
			};

			signUp(payload)
				.then((data) => {
					this.props.auth.userAccount.uid = data.lingviny_token;
					this.props.navigation.navigate('Congratulations');
				}).catch((error) => {
					this.setState({ isShowErrorModal: true, propsModal: {} });
				}).finally(() => {
					this.props.app.showLoader = false;
				});
		} else {
			this.setState({
				isShowErrorModal: true,
				propsModal: {
					description: checked.message,
				},
			});
		}
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
									autoCapitalize="none"
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
				<Modals.Notify
						show={this.state.isShowErrorModal}
						type={'error'}
						title={'Unable to Signup'}
						description={this.state.propsModal.description || 'Something went wrong.'}
						btnLabel={'Try again'}
						hideModal={() => this.setState({isShowErrorModal: false})}
					/>
			</View>
		);
	}
}
