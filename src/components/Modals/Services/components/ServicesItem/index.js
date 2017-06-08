// @flow

import React from 'react';
import {
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

import styles from './../../styles';

type PropsType = {
	onPress: Function,
	image: number,
}
const ServicesItem = (props: PropsType) => (
	<View style={styles.wrapperBtn}>
		<TouchableOpacity onPress={props.onPress}>
			<Image
			style={styles.img}
			source={props.image} />
		</TouchableOpacity>
	</View>
);

export default ServicesItem;
