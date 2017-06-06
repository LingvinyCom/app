// @flow

import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

import styles from './../../styles';

export default class ServicesItem extends Component {
	render() {
		const { imgUrl, onPress  } = this.props;
		return (
			<View style={styles.wrapperBtn}>
				<TouchableOpacity onPress={onPress}>
					<Image
						source={imgUrl}
					  style={styles.img}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

