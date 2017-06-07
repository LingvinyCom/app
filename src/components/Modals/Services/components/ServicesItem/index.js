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
			<Image source={props.image} style={styles.img}/>
		</TouchableOpacity>
	</View>
);

export default ServicesItem;
