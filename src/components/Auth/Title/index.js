// @flow

import React from 'react';
import {
	View,
	Text,
} from 'react-native';

import styles from './styles';

const Title = (props: Object) => (
	<View style={styles.wrapper}>
		<Text style={styles.text}>{props.text}</Text>
		<View style={styles.border} />
	</View>
);

export default Title;

