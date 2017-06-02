// @flow

import React from 'react';
import { View, Text } from 'react-native';

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
			<View style={styles.routerIconLeft}>
				<Icon
					name="menu"
					size={24}
					color={COLORS.blue}
				/>
			</View>
			<View>
				<Text style={styles.routerTitle}>{titlePage }</Text>
			</View>
			<View style={styles.routerIconRight}>
				<Icon
					name="notifications"
					size={24}
					color={COLORS.gray}
				/>
			</View>
		</View>
	);
};

export default RouterHeader;
