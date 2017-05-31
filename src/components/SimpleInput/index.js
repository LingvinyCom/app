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

export default class SimpleInput extends Component {
	// constructor(props: Object): void {
	// 	super(props);
	// }

	// props = {}

	// static defaultProps = {}

	render() {
		return (
			<View style={styles.wrapper}>
				{
					this.props.label &&
					<View style={styles.labelWrapper}>
						<Text style={styles.label}>{this.props.label}</Text>
					</View>
				}
				<TextInput
					style={styles.input}
					{...this.props}
				/>
			</View>
		);
	}
}

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
