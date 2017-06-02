// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

import styles from './styles';

const Description = (props: Object) => (
	<View style={styles.wrapper}>
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default Description;