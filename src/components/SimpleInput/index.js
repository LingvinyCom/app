// @flow

import React, { Component } from 'react';
import {
	TextInput,
	Text,
	View,
} from 'react-native';

import Colors from '../../config/colors.config';
import styles from './styles';

export default class SimpleInput extends Component {
	props: {
    maxLength?: number,
		placeholderTextColor?: string,
  };

  static defaultProps = {
    maxLength: 3,
		placeholderTextColor: Colors.gray,
  };

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
					underlineColorAndroid={'transparent'}
				/>
			</View>
		);
	}
}
