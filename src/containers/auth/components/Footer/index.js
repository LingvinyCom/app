// @flow

import React from 'react';
import {
	View,
	Text,
} from 'react-native';

import styles from './styles';

const Footer = (props: Object) => (
	<View style={styles.footer}>
		<Text style={styles.text}>{props.text}</Text>
		<Text style={styles.clickableText} onPress={props.onPressText}>
			{props.clickableText}
		</Text>
	</View>
);

export default Footer;

