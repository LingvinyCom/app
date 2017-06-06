// @flow

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../../config/colors.config';

type Props = {
    titlePage: string,
}

const RouterHeader = (props: Props) => {
	const { titlePage } = props;
	return (
		<View style={styles.routerHeader}>
			<TouchableOpacity style={styles.routerIconLeft}>
				<Image source={require('../../../../assets/img/menu-icon.png')} />
			</TouchableOpacity>
			<View>
				<Text style={styles.routerTitle}>{titlePage }</Text>
			</View>
			<TouchableOpacity style={styles.routerIconRight}>
				<Icon
					name="notifications"
					size={24}
					color={COLORS.gray}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default RouterHeader;
