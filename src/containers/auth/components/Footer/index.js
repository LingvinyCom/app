// @flow

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const Footer = (props: Object) => (
	<View>
		<Text>{props.text}</Text>
		<Text onPress={props.onPressText}>
			{props.clickableText}
		</Text>
	</View>
);

export default Footer;

const styles = StyleSheet.create({});
