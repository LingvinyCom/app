// @flow

import React, { Component } from 'react';
import {
	Dimensions,
	StyleSheet,
	TextInput,
	Text,
	View,
} from 'react-native';

import Colors from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;

const SimpleInput = (props: Object) => (
	<View style={styles.wrapper}>
		{
			props.label &&
			<View style={styles.labelWrapper}>
			<Text style={styles.label}>{props.label}</Text>
			</View>
		}
		<TextInput
			style={styles.input}
			{...props}
		/>
	</View>
);

export default SimpleInput;

const styles = StyleSheet.create({
		wrapper: {
    	width: WidthDevice - 80,
	    marginHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#c8c7cc',
	    marginBottom: 30,
    },
	input: {
		width: WidthDevice - 80,
		height: 30,
		paddingVertical: 0,
		paddingHorizontal: 0,
		fontSize: 14,
		color: Colors.gray,
		overflow: 'hidden',
	},
	label: {
		fontSize: 14,
		color: Colors.gray,
	},
});
