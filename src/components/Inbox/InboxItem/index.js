// @flow

import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

type Props = {
	onPress: Function,
	title: string,
	status?: string,
	theme: string,
	description: string,
	time: string,
	itemStatus: string,
};

const InboxItem = (props: Props) => {
	const {onPress, title, status, theme, description, time, itemStatus} = props;
	let statusStyle = styles.inboxItemStatus;
	if (itemStatus === 'process-translate') {
		statusStyle = [styles.inboxItemStatus, styles.inboxItemStatusPr];
	}
	if (itemStatus === 'wait-for-translate') {
		statusStyle = [styles.inboxItemStatus, styles.inboxItemStatusWr];
	}
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.inboxItem}>
				<View style={styles.inboxItemDetails}>
					<View style={styles.inboxItemHeader}>
						<Text style={styles.inboxItemTitle}>{ title }</Text>
						{
							status &&
							<Text style={statusStyle}>{ status }</Text>
						}
					</View>
					<Text style={styles.inboxItemTheme}>{ theme }</Text>
					<Text style={styles.inboxItemDescription}>{ description }</Text>
				</View>
				<View>
					<Text style={styles.inboxItemTime}>{ time }</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default InboxItem;
