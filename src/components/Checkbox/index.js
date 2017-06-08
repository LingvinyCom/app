// @flow

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../config/colors.config';

const Checkbox = (props) =>  {
	return (
		<TouchableOpacity
			style={styles.checkboxWrapper}
			onPress={ props.onPress }
		>
			<View style={ props.isCheckboxActive ? [styles.checkboxIcon, styles.isActiveCheckbox] : styles.checkboxIcon}>
				{
					props.isCheckboxActive && <Icon name="check" size={18} color={COLORS.blue} />
				}
			</View>
			<Text style={styles.checkboxLabel}>
				Show Password
			</Text>
		</TouchableOpacity>
	);
};

export default Checkbox;
