// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const MainDropdownMenu = (props: Object) => {
	return (
		props.isMainDropdownVisible &&
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.menuBtn}
				onPress={props.showDropDownMoveTo}
			>
				<Text style={styles.menuText}>
					Move to
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.menuBtn}>
				<Text style={styles.menuText}>
					Mark as Spam
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.menuBtn, styles.noBorder]}>
				<Text style={styles.menuText}>
					Delete
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MainDropdownMenu;