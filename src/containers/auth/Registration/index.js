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
import * as Modals from '../../../components/Modals/';
import * as Buttons from './../../../components/Buttons/';

import styles from './styles';

const domains = [
	{
		id: 1,
		domain: 'icloud.com',
		image: require('../../../assets/img/icloud.png'),
	},
	{
		id: 2,
		domain: 'gmail.com',
		image: require('../../../assets/img/google.png'),
	},
	{
		id: 3,
		domain: 'yahoo.com',
		image: require('../../../assets/img/yahoo.png'),
	},
	{
		id: 4,
		domain: 'aol.com',
		image: require('../../../assets/img/logo.png'), // NO IMAGE!!!!!!!!
	},
	{
		id: 5,
		domain: 'outlook.com',
		image: require('../../../assets/img/outlook.png'),
	},
	{
		id: 6,
		domain: 'hotmail.com',
		image: require('../../../assets/img/logo.png'), // NO IMAGE!!!!!!!!
	},
	{
		id: 7,
		domain: 'mail.ru',
		image: require('../../../assets/img/logo.png'), // NO IMAGE!!!!!!!!
	},
	{
		id: 8,
		domain: 'yandex.ru',
		image: require('../../../assets/img/logo.png'), // NO IMAGE!!!!!!!!
	},
];

@inject((allStores) => ({
	auth: allStores.auth,
}))
@observer
export default class Registration extends Component {
	state: {
		isShowServicesModal: boolean,
		isCollapsed: boolean,
		selectedDomainIage: ?number,
	}

	timer: ? number;

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowServicesModal: false,
			isCollapsed: true,
			selectedDomainIage: null,
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
			const existed = domains.find((d) => d.domain === domain);
			if (existed) {
				this.setState({
					isCollapsed: false,
					selectedDomainIage: existed.image,
				});
			} else {
				this.setState({
					isCollapsed: false,
					selectedDomainIage: null,
				});
			}
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
		console.log('onPress registration');
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
		const servicesList = [
			{
				title: 'google',
				imgUrl: require('../../../assets/img/google.png'),
				onPress: () => console.log("onPress btn google"),
			},
			{
				title: 'exchange',
				imgUrl: require('../../../assets/img/exchange.png'),
				onPress: () => console.log("onPress btn exchange"),
			},
			{
				title: 'yahoo',
				imgUrl: require('../../../assets/img/yahoo.png'),
				onPress: () => console.log("onPress btn yahoo"),
			},
			{
				title: 'icloud',
				imgUrl: require('../../../assets/img/icloud.png'),
				onPress: () => console.log("onPress btn icloud"),
			},
			{
				title: 'outlook',
				imgUrl: require('../../../assets/img/outlook.png'),
				onPress: () => console.log("onPress btn outlook"),
			},
		];

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
								this.state.selectedDomainIage ?
									<Buttons.WithImage
										img={this.state.selectedDomainIage}
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
						servicesList={servicesList}
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