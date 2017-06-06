// @flow

import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../../config/colors.config';

const NewMessageBtn = (props: Object) => {
	const { onPress } = props;
	return (
		<View style={styles.newMessageBtnBlock}>
			<TouchableOpacity
			onPress={onPress}
			style={styles.newMessageBtn}
			>
				<Icon
					name="edit"
					size={30}
					color={COLORS.white}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NewMessageBtn;
