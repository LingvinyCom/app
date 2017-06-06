// @flow

import React, {Component} from 'react';
import {
	View,
	Image,
} from 'react-native';

import styles from './styles';


export default class WithImageButton extends Component {
	render() {
		const styleButton = this.props.color === 'transparent' ? [styles.button, styles.transparentBtn] : styles.button;

		return (
			<View
				style={styleButton}
				onPress={this.props.onPress}
				color={this.props.color}
			>
				<Image source={this.props.img}/>
			</View>
		);
	}
}
