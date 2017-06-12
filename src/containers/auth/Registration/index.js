// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
	Linking,
	KeyboardAvoidingView,
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

import { signUp, getEngine } from '../../../utils/request/';
import { checkFields } from '../../../utils/commonFunctions';

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
		isShowErrorModal: boolean,
		propsModal: Object,
	}

	timer: ? number;

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowServicesModal: false,
			isShowErrorModal: false,
			isCollapsed: true,
			propsModal: {},
		};
	}

	componentWillMount() {
		this.timer = null;
		this.detectEmailDomain(this.props.auth.email);
	}

	componentDidMount() {
		getEngine()
			.then((data) => {
				this.props.auth.engine = data;
			}).catch((error) => {
				this.setState({ isShowErrorModal: true, propsModal: {} });
			});
	}

	detectEmailDomain(email: string) {
		const domain = email.substring(email.lastIndexOf("@") + 1);
		const isEmailValid = email && PATTERN_CONFIG.email.test(email);

		if (isEmailValid && domain) {
			const existed = this.props.auth.engine.find((d) => d.title === domain);
			if (existed) {
				this.props.auth.selectedDomain = existed;
			} else {
				this.props.auth.selectedDomain = {};
			}
			this.setState({ isCollapsed: false });
		} else {
			this.setState({ isCollapsed: true });
		}
	}

	onChangeEmail(text: string) {
		this.props.auth.setValue({ 'email': text });
		clearTimeout(this.timer);
		this.timer = setTimeout(this.detectEmailDomain.bind(this, text), 1000);
	}

	registration() {
		const { email, password, selectedDomain } = this.props.auth;
		const checked = checkFields([email, password, selectedDomain.id]);

		if (!checked.error) {
			this.props.app.showLoader = true;
			const payload = {
				email,
				password,
				engine_id: selectedDomain ? selectedDomain.id : null,
			};

			signUp(payload)
				.then((data) => {
					if (data && data.token) {
						this.props.auth.setValue({ userAccount: { uid: data.token } });
					}
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

	toggleServicesModal(value: boolean) {
		this.setState({ isShowServicesModal: value });
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
		const { navigate } = this.props.navigation;
		const { isShowServicesModal, isShowErrorModal, isCollapsed, propsModal } = this.state;

		return (
			<KeyboardAvoidingView
				style={styles.registrationWrapper}
				behavior="position"
			>
				<ScrollView>
					<Logotip />
					<Title text={'New to Lingviny?'} />
					<Description
						text={`Please enter your credentials for the existing mailbox you'll be working with and we'll take care of all the rest`}
					/>
					<View style={styles.form}>
						<Input
							label={'EMAIL'}
							value={this.props.auth.email}
							onChangeText={(text: string) => this.onChangeEmail(text)}
							placeholder={'Email Address'}
							keyboardType="email-address"
							autoCapitalize={"none"}
						/>
						<Collapsible collapsed={isCollapsed}>
							{
								Object.keys(this.props.auth.selectedDomain).length > 0 ?
									<Buttons.WithImage
										img={APP_CONFIG.EMAIL_ENGINE_IMAGES[this.props.auth.selectedDomain.title]}
										onPress={() => this.toggleServicesModal(true)}
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
							placeholder={'Password'}
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
						modalVisible={isShowServicesModal}
						hideModal={() => this.toggleServicesModal(false)}
						servicesList={this.props.auth.engine}
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
					<Modals.Notify
						show={isShowErrorModal}
						type={'error'}
						title={'Unable to Signup'}
						description={propsModal.description || 'Something went wrong.'}
						btnLabel={'Try again'}
						hideModal={() => this.setState({ isShowErrorModal: false })}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
