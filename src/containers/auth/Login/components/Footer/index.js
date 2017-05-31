// @flow

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default class Footer extends Component {
	// props = {}

	// static defaultProps = {}

	render() {
		const { text, clickableText, onPressText } = this.props;

		return (
			<View>
				<Text>{text}</Text>
				<Text onPress={onPressText}>
					{clickableText}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
