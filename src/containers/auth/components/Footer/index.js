// @flow

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Colors from '../../../../config/colors.config';

const Footer = (props: Object) => (
	<View style={styles.footer}>
		<Text style={styles.text}>{props.text}</Text>
		<Text style={styles.clickableText} onPress={props.onPressText}>
			{props.clickableText}
		</Text>
	</View>
);

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 45,
    },
    text: {
        fontSize: 14,
        color: Colors.lightGray,
        paddingRight: 12,
    },
    clickableText: {
        fontSize: 14,
        color: Colors.green,
    },
});
