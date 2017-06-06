// @flow

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
	Linking,
	View,
	ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Title from '../../../components/Auth/Title/';
import Description from '../../../components/Auth/Description/';
import Input from './../../../components/SimpleInput/';
import Footer from '../../../components/Auth/Footer/';
import Logotip from '../../../components/Auth/Logo';
import PATTERN_CONFIG from '../../../config/pattern.config';
import APP_CONFIG from '../../../config/app.config';
import * as Modals from '../../../components/Modals/';
import * as Buttons from './../../../components/Buttons/';

import { signUp } from '../../../utils/request/';

import styles from './styles';


@inject((allStores) => ({
	auth: allStores.auth,
	app: allStores.app,
}))
@observer
export default class Registration extends Component {
	state: {
		isShowServicesModal: boolean,
		isCollapsed: boolean,
	}

	timer: ? number;

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowServicesModal: false,
			isCollapsed: true,
		};
	}

	componentWillMount() {
		this.timer = null;
		this.detectEmailDomain(this.props.auth.email);
	}

	detectEmailDomain(email: string) {
		const domain = email.substring(email.lastIndexOf("@") + 1);
		const isEmailValid = email && PATTERN_CONFIG.email.test(email);

		if (isEmailValid && domain) {
			const existed = APP_CONFIG.EMAIL_DOMAINS.find((d) => d.domain === domain);
			if (existed) {
				this.props.auth.selectedDomain = existed;
			} else {
				this.props.auth.selectedDomain = null;
			}
			this.setState({ isCollapsed: false });
		} else {
			this.setState({isCollapsed: true});
		}
	}

	onChangeEmail(text: string) {
		this.props.auth.setValue({'email': text});
		clearTimeout(this.timer);
		this.timer = setTimeout(this.detectEmailDomain.bind(this, text), 1000);
	}

	registration() {
		this.props.app.showLoader = true;
		const payload = {
			email: this.props.auth.email,
			password: this.props.auth.password,
			id: this.props.auth.selectedDomain.id,
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

	toggleServicesModal(value: boolean) {
		this.setState({isShowServicesModal: value});
	}

	handleClick = () => {
		const policyLink = 'https://lingviny.com/policy';

		Linking.canOpenURL(policyLink).then(supported => {
			if (supported) {
				Linking.openURL(policyLink);
			} else {
				console.log('Don\'t know how to open URI: ' + policyLink);
			}
		});
	};

	render() {
		const {navigate} = this.props.navigation;
		return (
			<ScrollView>
				<View style={styles.registrationWrapper}>
					<Logotip/>
					<Title text={'New to Lingviny?'}/>
					<Description
						text={`Please enter your credentials for the existing mailbox you'll be working with and we'll take care of all the rest`}
					/>

					<View style={styles.form}>
						<Input
							label={'EMAIL'}
							value={this.props.auth.email}
							onChangeText={(text: string) => this.onChangeEmail(text)}
							placeholder={'Enter an Email'}
						/>

						<Collapsible collapsed={this.state.isCollapsed}>
							{
								this.props.auth.selectedDomain ?
									<Buttons.WithImage
										img={this.props.auth.selectedDomain.image}
										color={'transparent'}
									/> :
									<Buttons.Rounded
										text={'Choose Mail Service'}
										onPress={() => this.toggleServicesModal(true)}
										color={'transparent'}
									/>
							}
						</Collapsible>

						<Input
							label={'PASSWORD'}
							secureTextEntry={true}
							value={this.props.auth.password}
							onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
							placeholder={'Enter a Password'}
						/>
						<Buttons.Rounded
							text={'Continue'}
							onPress={this.registration.bind(this)}
						/>
					</View>

					<Footer
						text={'Already a member?'}
						clickableText={'Login'}
						onPressText={() => navigate('SignIn')}
					/>
					<Modals.Services
						modalVisible={this.state.isShowServicesModal}
						hideModal={() => this.toggleServicesModal(false)}
						servicesList={APP_CONFIG.EMAIL_DOMAINS}
						onPressItem={(selected) => {
							this.props.auth.selectedDomain = selected;
							this.toggleServicesModal(false);
						}}
						onPressPolicy={this.handleClick.bind(this)}
						onPressOther={() => {
							this.toggleServicesModal(false);
							navigate('AddMail');
						}}
					/>
				</View>
			</ScrollView>
		);
	}
}
