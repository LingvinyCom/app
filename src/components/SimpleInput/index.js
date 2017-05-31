// @flow

import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
	Text,
	View,
} from 'react-native';


const SimpleInput = (props: Object) => (
	<View>
		{
			props.label &&
				<View style={styles.label}>
					<Text>{props.label}</Text>
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
	input: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingVertical: 0,
		paddingHorizontal: 10,
		width: 285,
		height: 36,
		borderRadius: 3,
		borderWidth: 1,
		marginBottom: 10,
		borderColor: '#c8c7cc',
		fontSize: 14,
		color: '#646464',
		overflow: 'hidden',
	},
	label: {

	},
});
