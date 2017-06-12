// @flow

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default (props: Object) => (
	<View style={styles.wrapper}>
		<Text style={styles.title}>{props.title}</Text>
		<Text style={styles.email}>{props.email}</Text>
	</View>
);
