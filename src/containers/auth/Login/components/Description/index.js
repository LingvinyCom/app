// @flow

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

export default class Description extends Component {
	// props = {}

	// static defaultProps = {}

	render() {
		return (
			<View>
				<Text>{this.props.text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});
