// @flow

import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';

const logo = require('../../../assets/img/logo.png');

const Logotip = () => {
	return (
		<View style={styles.wrapper}>
			<Image source={logo}/>
		</View>
	);
};

export default Logotip;
