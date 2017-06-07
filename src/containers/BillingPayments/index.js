// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/routerHeader';

import styles from './styles';

export default class BillingPayments extends Component {
	static navigationOptions = {
		drawerLabel: 'Billing and Payments',
		drawerIcon: () => (
			<Image source={require('../../assets/img/billing-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"OfficeEmail"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						Billing and Payments Screen
					</Text>
				</View>
			</View>
		)
	}
}
