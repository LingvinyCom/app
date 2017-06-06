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
				color={this.props.color}
			>
				<Image
					style={{flex:1, marginVertical: 5,}}
					source={this.props.img}
				  resizeMode="contain"
				/>
			</View>
		);
	}
}
