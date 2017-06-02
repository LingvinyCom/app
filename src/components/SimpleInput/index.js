// @flow

import React, { Component } from 'react';
import {
	TextInput,
	Text,
	View,
} from 'react-native';

import COLORS from '../../config/colors.config';
import styles from './styles';

export default class SimpleInput extends Component {
	props: {
		label?: string,
    maxLength?: number,
    placeholder: string,
		placeholderTextColor?: string,
		underlineColorAndroid?: string,
		onChangeText: Function,
  }

	static defaultProps: {
		maxLength: number,
		placeholderTextColor: string,
		underlineColorAndroid: string,
	}

  static defaultProps = {
    maxLength: 40,
		placeholderTextColor: COLORS.gray,
		underlineColorAndroid: 'transparent',
  };

	render() {
		const { label } = this.props;

		return (
			<View style={styles.wrapper}>
				{
					label &&
					<View style={styles.labelWrapper}>
					<Text style={styles.label}>{label}</Text>
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
