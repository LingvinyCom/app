// @flow

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const OrdersHistoryItem = props => (
	<View style={styles.wrapper}>
		<View style={styles.header}>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<View style={props.status === 'TRANSLATED' ? [styles.statusWrapper, styles.statusWrapperGreen ] : styles.statusWrapper}>
				<Text style={styles.statusTitle}>
					{props.status}
				</Text>
			</View>
		</View>
		<View style={styles.details}>
			<Text style={styles.time}>
				{props.time}
			</Text>
			<View style={styles.priceWrapper}>
				<Text style={styles.factPrice}>
					${props.factPrice}
				</Text>
				<Text style={styles.countWords}>
					/{props.countWords}w
				</Text>
			</View>
		</View>
	</View>
);

export default OrdersHistoryItem;
