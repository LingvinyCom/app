import React from 'react';
import {View, Text} from 'react-native';

import Inbox from './../containers/Inbox';
import Sent from './../containers/Sent';
import Notifications from './../containers/Notifications';

const CustomDrawerContentComponent = (props) => (
	<View>
		<Text>
			CustomDrawerContentComponent
		</Text>
	</View>
);

export default {
	Inbox: {screen: Inbox},
	Sent: {screen: Sent},
	Notifications: {screen: Notifications},
};
