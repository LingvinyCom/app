import React from 'react';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {ScrollView} from 'react-native';

import Inbox from './../containers/Inbox';
import Sent from './../containers/Sent';
import BalanceBlock from './../containers/Sidebar/components/BalanceBlock';
import Account from './../containers/Sidebar/components/Account';
import TranslatedItems from './../containers/TranslatedItems';
import Archive from './../containers/Archive';
import Spam from './../containers/Spam';
import Drafts from './../containers/Drafts';
import JohnFolder from './../containers/JohnFolder';
import OfficeEmail from './../containers/OfficeEmail';
import BillingPayments from './../containers/BillingPayments';
import AccountSettings from './../containers/AccountSettings';

import COLORS from './../config/colors.config';

export default DrawerNavigator(
	{
		Inbox: { name: 'Inbox', screen: Inbox },
		Sent: { name: 'Sent', screen: Sent },
		TranslatedItems: { name: 'TranslatedItems', screen: TranslatedItems },
		Archive: { name: 'Archive', screen: Archive },
		Spam: { name: 'Spam', screen: Spam },
		Drafts: { name: 'Drafts', screen: Drafts },
		JohnFolder: { name: 'JohnFolder', screen: JohnFolder },
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
					<BalanceBlock
						balanceValue={"250.00"}
						onPress={() => console.log('BalanceBlock')}
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

