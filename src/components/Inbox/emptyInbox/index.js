// @flow

import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default () => (
	<View style={styles.container}>
		<View style={styles.imgWrapper}>
			<Image source={require('../../../assets/img/inbox-icon.png')}/>
			<View style={styles.countMessages}>
				<Text style={styles.countMessagesText}>0</Text>
			</View>
		</View>
		<Text style={styles.text}>
			No emails yet
		</Text>
	</View>
);
