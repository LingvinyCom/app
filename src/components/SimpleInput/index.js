// @flow

import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput,
	Text,
	View,
} from 'react-native';

export default class SimpleInput extends Component {
	// constructor(props: Object): void {
	// 	super(props);
	// }

	// props = {}

	// static defaultProps = {}

	render() {
		return (
			<View>
				{
					this.props.label &&
					<View style={styles.label}>
						<Text>EMAIL</Text>
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
