// @flow

import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type Props = {
	avatarText: string,
	accountName: string,
	accountEmail: string,
};

const Account = (props: Props) => {
	const {avatarText, accountName, accountEmail} = props;
	return (
		<View style={styles.account}>
			<View style={styles.accountAvatar}>
				<Text style={styles.accountAvatarText}>
					{ avatarText }
				</Text>
			</View>
			<View style={styles.accountInfo}>
				<Text style={styles.accountName}>
					{ accountName }
				</Text>
				<Text style={styles.accountEmail}>
					{ accountEmail }
				</Text>
			</View>
		</View>
	);
};

export default Account;