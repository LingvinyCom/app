// @flow

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = require('../../../../assets/img/logo.png');

const Logotip = () => {
	return (
		<View style={styles.wrapper}>
			<Image source={logo}/>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 30,
	},
});

export default Logotip;