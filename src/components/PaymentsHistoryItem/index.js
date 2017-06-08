// @flow

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PaymentsHistoryItem = props => (
	<View style={styles.wrapper}>
		<View style={styles.header}>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<Text style={styles.time}>
				{props.time}
			</Text>
		</View>
		<View style={styles.details}>
			<Text style={styles.factPrice}>
				${props.factPrice}
			</Text>
			<Text style={styles.countWords}>
				{props.countWords}w
			</Text>
		</View>
	</View>
);

export default PaymentsHistoryItem;
