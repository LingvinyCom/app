import React from 'react';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {ScrollView} from 'react-native';

import Inbox from './../containers/Inbox';
import Sent from './../containers/Sent';
import Notifications from './../containers/Notifications';
import BalanceBlock from './../containers/Sidebar/components/balanceBlock';
import Account from './../containers/Sidebar/components/account';

const Sidebar = DrawerNavigator(
	{
		Inbox: {screen: Inbox},
		Sent: {screen: Sent},
		Notifications: {screen: Notifications}
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
				marginTop: 25,
			}
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


