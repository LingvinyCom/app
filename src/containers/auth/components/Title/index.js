// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

import Colors from '../../../../config/colors.config';

const Title = (props: Object) => (
	<View style={styles.wrapper}>
		<Text style={styles.text}>{props.text}</Text>
		<View style={styles.border} />
	</View>
);

export default Title;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    text: {
        fontSize: 22,
        color: Colors.gray,
        paddingBottom: 7,
    },
    border: {
        width: 45,
        height: 3,
        backgroundColor: Colors.green,
    },
});
