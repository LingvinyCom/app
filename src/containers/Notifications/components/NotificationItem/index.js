// @flow

import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

type Props = {
	onPress: Function,
	title: string,
	theme: string,
	description: string,
	time: string,
};

const NotificationItem = (props: Props) => {
	const {onPress, title, theme, time, description } = props;

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.inboxItem}>
				<View style={styles.inboxItemDetails}>
					<Text style={styles.inboxItemTheme}>{ theme }</Text>
					<Text style={styles.inboxItemDescription}>{ description }</Text>
					<Text style={styles.inboxItemTitle}>{ title }</Text>
				</View>
				<View>
					<Text style={styles.inboxItemTime}>{ time }</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default NotificationItem;
