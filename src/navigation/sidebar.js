import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView } from 'react-native';

import Inbox from './../containers/Inbox/';
import Sent from './../containers/Sent/';

import TranslatedItems from './../containers/TranslatedItems/';
import Archive from './../containers/Archive/';
import Spam from './../containers/Spam/';
import Drafts from './../containers/Drafts/';
import ImportedFolder from './../containers/ImportedFolder/';
import OfficeEmail from './../containers/OfficeEmail/';
import BillingPayments from './../containers/BillingPayments/';
import AccountSettings from './../containers/AccountSettings/';

import Account from './../components/Sidebar/Account/';
import Balance from './../components/Sidebar/Balance/';
import Logout from '../components/Sidebar/Logout/';

import COLORS from './../config/colors.config';

export default DrawerNavigator(
	{
		Inbox: { name: 'Inbox', screen: Inbox },
		Sent: { name: 'Sent', screen: Sent },
		TranslatedItems: { name: 'TranslatedItems', screen: TranslatedItems },
		Archive: { name: 'Archive', screen: Archive },
		Spam: { name: 'Spam', screen: Spam },
		Drafts: { name: 'Drafts', screen: Drafts },
		ImportedFolder: { name: 'JohnFolder', screen: ImportedFolder },
		OfficeEmail: { name: 'OfficeEmail', screen: OfficeEmail },
		BillingPayments: { name: 'BillingPayments', screen: BillingPayments },
		AccountSettings: { name: 'AccountSettings', screen: AccountSettings },
	},
	{
		initialRouteName: 'Inbox',
		drawerWidth: 315,
		drawerPosition: 'left',
		headerMode: 'screen',
		contentComponent: (props) => {
			return (
				<ScrollView>
					<Balance
						balanceValue={"250.00"}
						onPress={() => console.log('Go to Balance')}
					/>
					<Account
						avatarText={"TS"}
						accountEmail={"johnsmith@gmail.com"}
						accountName={"John Smith"}
					/>
					<DrawerItems {...props} />
					<Logout navigation={props.navigation}/>
				</ScrollView>
			);
		},
		contentOptions: {
			style: {
				paddingVertical: 0,
				marginTop: 0,
			},
			inactiveTintColor: COLORS.gray,
			activeTintColor: COLORS.blue,
			activeBackgroundColor: COLORS.blackWhite,
			labelStyle: {
				fontSize: 14,
				fontWeight: 'normal',
			},
		},
	});
