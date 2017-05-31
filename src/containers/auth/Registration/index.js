// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  ScrollView,
} from 'react-native';

import Title from '../components/Title/';
import Description from '../components/Description/';
import Form from '../components/Form/';
import RoundedButton from './../../../components/RoundedButton/';
import Footer from '../components/Footer/';
import Logotip from '../components/Logo';
import ServicesModal from '../../../components/ServicesModal';

import styles from './styles';

@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class Registration extends Component {
	state: {
		isShowServicesModal: boolean,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowServicesModal: false,
		};
	}

	registration() {
		console.log('onPress registration');
	}

	toggleServicesModal(value: boolean) {
		this.setState({ isShowServicesModal: value });
	}

	render() {
		const { navigate } = this.props.navigation;
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
					<Form
						auth={this.props.auth}
						onPress={this.registration.bind(this)}
						component={
							<RoundedButton
								text={'Choose Mail Service'}
								onPress={() => this.toggleServicesModal(true)}
								color={'transparent'}
							/>
						}
					/>
					<Footer
						text={'Already a member?'}
						clickableText={'Login'}
						onPressText={() => navigate('SignIn')}
					/>
					<ServicesModal
						modalVisible={this.state.isShowServicesModal}
						hideModal={() => this.toggleServicesModal(false)}
						servicesList={servicesList}
						onPressPolicy={() => console.log("onPress Policy")}
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
