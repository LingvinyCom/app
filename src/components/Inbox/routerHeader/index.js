// @flow

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../config/colors.config';

type Props = {
	titlePage: string,
	onPressLeftIcon: Function,
	onPressRightIcon?: Function,
	leftIconUrl: string,
	isShowRightIcon?: boolean,
}

const RouterHeader = (props: Props) => {
	const { leftIconUrl, rightIconUrl, titlePage, onPressLeftIcon, onPressRightIcon, isShowRightIcon } = props;
	return (
		<View style={styles.routerHeader}>
			<TouchableOpacity
				style={styles.routerIconLeft}
			  onPress={onPressLeftIcon}
			>
				<Image source={leftIconUrl} />
			</TouchableOpacity>
			<View>
				<Text style={styles.routerTitle}>{titlePage }</Text>
			</View>
			<TouchableOpacity
				style={styles.routerIconRight}
				onPress={onPressRightIcon}
			>
				{
					isShowRightIcon &&
					<Image source={rightIconUrl} />
				}
			</TouchableOpacity>
		</View>
	);
};

export default RouterHeader;
