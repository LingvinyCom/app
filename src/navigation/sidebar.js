import React from 'react';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {ScrollView} from 'react-native';

import Inbox from './../containers/Inbox';
import Sent from './../containers/Sent';
import BalanceBlock from './../containers/Sidebar/components/balanceBlock';
import Account from './../containers/Sidebar/components/account';
import TranslatedItems from './../containers/TranslatedItems';
import Archive from './../containers/Archive';
import Spam from './../containers/Spam';
import Drafts from './../containers/Drafts';
import JohnFolder from './../containers/JohnFolder';
import OfficeEmail from './../containers/OfficeEmail';
import BillingPayments from './../containers/BillingPayments';
import AccountSettings from './../containers/AccountSettings';

import COLORS from './../config/colors.config';

const Sidebar = DrawerNavigator(
	{
		Inbox: {screen: Inbox},
		Sent: {screen: Sent},
		TranslatedItems: {screen: TranslatedItems},
		Archive: {screen: Archive},
		Spam: {screen: Spam},
		Drafts: {screen: Drafts},
		JohnFolder: {screen: JohnFolder},
		OfficeEmail: {screen: OfficeEmail},
		BillingPayments: {screen: BillingPayments},
		AccountSettings: {screen: AccountSettings},
	},
	{
		initialRouteName: 'Inbox',
		drawerWidth: 315,
		drawerPosition: 'left',
		headerMode: 'screen',
		contentComponent: (props) => {
			return(
				<ScrollView>
					<BalanceBlock
						balanceValue={250}
						onPress={ () => console.log("onPress add Btn balance") }
					/>
					<Account
						avatarText={"TS"}
						accountEmail={"johnsmith@gmail.com"}
						accountName={"John Smith"}
					/>
					<DrawerItems {...props} />
				</ScrollView>
			);
		},
		contentOptions: {
			style: {
				padding: 0,
				marginTop: 0,
			},
			inactiveTintColor: COLORS.gray,
			activeTintColor: COLORS.blue,
			activeBackgroundColor: COLORS.blackWhite,
			labelStyle: {
				fontSize: 14,
				fontWeight: 'normal',
			},
		}
	});

export default {
	Sidebar: {
		screen: Sidebar,
		navigationOptions: {
			header: null
		}
	}
};


