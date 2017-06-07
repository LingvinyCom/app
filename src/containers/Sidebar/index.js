// @flow

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import styles from './styles';

import BalanceBlock from './components/BalanceBlock';
import Account from './components/Account';
import MenuItem from './components/MenuItem';

type Props = {
	accountBalanceValue: number,
	accountName: string,
	accountEmail: string,
	avatarText: string,
};

export default class Sidebar extends Component {
	state: {
		accountBalanceValue: number,
		accountName: string,
		accountEmail: string,
		avatarText: string,
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			accountBalanceValue: 250,
			accountName: "John Smith",
			accountEmail: "johnsmith@gmail.com",
			avatarText: "TS",
		};
	}

	render() {
		const menuTopList = [
			{
				iconClass: "inbox",
				title: "Inbox",
				onPress: () => this.props.navigation.navigate('Inbox'),
			},
			{
				iconClass: "send",
				title: "Sent",
				onPress: () => console.log(" navigate to Sent "),
			},
			{
				iconClass: "message",
				title: "Translated Items",
				onPress: () => console.log(" navigate to Translated Items "),
			},
			{
				iconClass: "file-download",
				title: "Archive",
				onPress: () => console.log(" navigate to Archive "),
			},
			{
				iconClass: "warning",
				title: "Translated Spam",
				onPress: () => console.log(" navigate to Spam "),
			},
			{
				iconClass: "drafts",
				title: "Drafts",
				onPress: () => console.log(" navigate to Drafts "),
			},
		];
		const menuMiddleList = [
			{
				iconClass: "folder-open",
				title: "John Folder",
				onPress: () => console.log(" navigate to John Folder "),
			},
			{
				iconClass: "folder-open",
				title: "Office Email",
				onPress: () => console.log(" navigate to Office Email "),
			},
		];
		const menuBottomList = [
			{
				iconClass: "payment",
				title: "Billing and Payments",
				onPress: () => console.log(" navigate to Inbox "),
			},
			{
				iconClass: "account-box",
				title: "Account Settings",
				onPress: () => console.log(" navigate to Sent "),
			},
		];
		return (
			<View style={styles.mainContainer}>
				<View style={styles.sidebarWrapper}>
					<ScrollView>
						<BalanceBlock
							balanceValue={this.state.accountBalanceValue}
							onPress={ () => console.log("onPress add Btn balance") }
						/>
						<Account
							avatarText={this.state.avatarText}
							accountName={this.state.accountName}
							accountEmail={this.state.accountEmail}
						/>
						<View style={styles.menuList}>
							{
								menuTopList.map((item, index) =>
									<MenuItem
										key={index}
										onPress={item.onPress}
										title={item.title}
										iconClass={item.iconClass}
									/>
								)
							}
							<View style={styles.middleListMenu}>
								{
									menuMiddleList.map((item, index) =>
										<MenuItem
											key={index}
											onPress={item.onPress}
											title={item.title}
											iconClass={item.iconClass}
										/>
									)
								}
							</View>
							<View style={styles.bottomListMenu}>
								{
									menuBottomList.map((item, index) =>
										<MenuItem
											key={index}
											onPress={item.onPress}
											title={item.title}
											iconClass={item.iconClass}
										/>
									)
								}
							</View>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
