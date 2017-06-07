// @flow

import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';

import RouterHeader from '../../components/Inbox/routerHeader';
import EmailAccountBlock from './components/emailAccountBlock';
import AccountInfoBlock from './components/accountInfoBlock';

import styles from './styles';

export default class AccountSettings extends Component {
	static navigationOptions = {
		drawerLabel: 'Account Settings',
		drawerIcon: () => (
			<Image source={require('../../assets/img/settings-icon.png')} />
		),
	};
	render() {
		const EmailsList = [
			{
				isActiveEmailAccount: true,
				accountEmail: "johnsmith@gmail.com",
				countInboxEmails: "192",
				onPressEditEmail: () => console.log("onPress btn edit email"),
			},
			{
				isActiveEmailAccount: false,
				accountEmail: "johnsmithbusiness@gmail.com",
				countInboxEmails: "5",
				onPressEditEmail: () => console.log("onPress btn edit email"),
			},
		];
		const ActionsList = [
			{
				title: "Orders History",
				onPress: () => console.log("navigate to this Item"),
			},
			{
				title: "Payments History",
				onPress: () => console.log("navigate to this Item"),
			},
			{
				title: "Signature",
				onPress: () => console.log("navigate to this Item"),
			},
			{
				title: "Auto Translation",
				onPress: () => console.log("navigate to this Item"),
			},
			{
				title: "Feedback",
				onPress: () => console.log("navigate to this Item"),
			},
		];
		return (
			<ScrollView>
				<View style={styles.pageContainer}>
					<RouterHeader
						onPressLeftIcon={ () => this.props.navigation.navigate('DrawerOpen')}
						titlePage={"Account Settings"}
						leftIconUrl={require('../../assets/img/menu-icon.png')}
						isShowRightIcon={false}
					/>
					<View style={styles.pageContent}>
						<EmailAccountBlock
							emailsList={EmailsList}
							onPressAddEmailAccount={() => console.log("add email account")}
						/>
						<AccountInfoBlock
							actionsList={ActionsList}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}
