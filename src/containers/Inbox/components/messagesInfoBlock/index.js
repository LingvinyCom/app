// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type Props = {
	onPress: Function,
};

const MessegesBlockInfo = (props: Props) => {
	const {onPress} = props;
	return (
		<View style={styles.infoBlock}>
			<Text style={styles.infoBlockText}>
				Personal messages comes first, then notifications-kind ones and newsletter afterwords
			</Text>
			<TouchableOpacity
				style={styles.infoBlockBtn}
				onPress={onPress}
			>
				<Text style={styles.infoBlockBtnText}>Okay, got it</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MessegesBlockInfo;
