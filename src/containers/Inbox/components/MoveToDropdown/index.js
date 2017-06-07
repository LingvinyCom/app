// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../../config/colors.config';

const MoveToDropdown = (props) => {
	return (
		props.isMoveToDropdownVisible &&
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.menuBtn}
			  onPress={props.backToMainDropdown}
			>
				<Icon name="keyboard-arrow-left" size={22} color={COLORS.gray} />
				<Text style={styles.menuText}>
					Move to
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.menuBtn}>
				<Text style={styles.menuText}>
					Archive
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.menuBtn]}>
				<Text style={styles.menuText}>
					John Folder
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.menuBtn, styles.noBorder]}>
				<Text style={styles.menuText}>
					Office Email
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MoveToDropdown;
