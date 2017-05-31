// @flow

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default class LoginFooter extends Component {
	// props = {}

	// static defaultProps = {}

	render() {
		return (
			<View>
				<Text>
					Already a member?
				</Text>
				<Text onPress={this.props.onPress}>
					Login
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
