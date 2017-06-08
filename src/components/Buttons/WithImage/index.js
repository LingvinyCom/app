// @flow

import React, {Component} from 'react';
import {
	TouchableOpacity,
	Image,
} from 'react-native';

import styles from './styles';


export default class WithImageButton extends Component {
	render() {
		const styleButton = this.props.color === 'transparent' ? [styles.button, styles.transparentBtn] : styles.button;

		return (
			<TouchableOpacity
				style={styleButton}
				color={this.props.color}
				onPress={this.props.onPress}
			>
				<Image
					style={styles.img}
					source={this.props.img}
					resizeMode="contain"
				/>
			</TouchableOpacity>
		);
	}
}
