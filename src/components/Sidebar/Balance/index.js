// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../config/colors.config';

type Props = {
	balanceValue: number,
	onPress: Function,
};

const Balance = (props: Props) => {
	const { balanceValue, onPress } = props;
	return (
		<View style={styles.balanceBlock}>
			<Text style={styles.balanceBlockTitle}>Available Balance</Text>
			<View style={styles.balanceBlockValue}>
				<Text style={styles.balanceCount}>${balanceValue}</Text>
				<TouchableOpacity
					style={styles.balanceBtnAdd}
					onPress={onPress}
				>
					<Icon
						name="add"
						size={20}
						color={COLORS.white}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Balance;
