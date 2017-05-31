import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import CustomSwitch from './customSwitch';
import Colors from '../../config/colors.config';

const Switch = (props: Object) => (
	<View style={styles.switchBlock}>
		<Text style={styles.switchLabel}>{props.label}</Text>
		<View style={styles.switchWrapper}>
			<CustomSwitch/>
		</View>
	</View>
);

export default Switch;

const styles = StyleSheet.create({
    switchBlock: {
    	flexDirection: 'row',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    marginBottom: 35,
	    marginHorizontal: 40,
    },
    switchLabel: {
    	fontSize: 14,
	    color: Colors.gray,
    },
    switchWrapper: {
    },
});
