// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

import Colors from '../../../../config/colors.config';

const Description = (props: Object) => (
	<View style={styles.wrapper}>
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default Description;

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 60,
        marginBottom: 30,
    },
    text: {
        fontSize: 14,
        color: Colors.lightGray,
        lineHeight: 20,
        textAlign: 'center',
    },
});
