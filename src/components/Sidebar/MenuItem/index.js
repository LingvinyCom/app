// @flow

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import COLORS from '../../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type Props = {
	iconClass: string,
	title: string,
	onPress: Function,
};

const MenuItem = (props: Props) => {
	const { iconClass, title, onPress } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.menuItemBtn}
		>
			<Icon
				name={iconClass}
				size={20}
				color={COLORS.iconGray}
			/>
			<Text style={styles.menuItemTitle}>{title}</Text>
		</TouchableOpacity>
	);
};

export default MenuItem;
