// @flow

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
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
	const { leftIconUrl, titlePage, onPressLeftIcon, isShowRightIcon, onPressRightIcon } = props;
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
				<View>
					{
						isShowRightIcon &&
						<TouchableOpacity onPress={onPressRightIcon}>
								<Icon
									name="more-vert"
									size={26}
									color={COLORS.lightGray}
								/>
						</TouchableOpacity>
					}
				</View>
			</View>
	);
};

export default RouterHeader;
