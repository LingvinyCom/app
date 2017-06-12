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

export default (props: Props) => (
	<TouchableWithoutFeedback onPress={props.onPress}>
		<View style={styles.inboxItem}>
			<View style={styles.inboxItemDetails}>
				<Text style={styles.inboxItemTheme}>{ props.theme }</Text>
				<Text style={styles.inboxItemDescription}>{ props.description }</Text>
				<Text style={styles.inboxItemTitle}>{ props.title }</Text>
			</View>
			<View>
				<Text style={styles.inboxItemTime}>{ props.time }</Text>
			</View>
		</View>
	</TouchableWithoutFeedback>
);
