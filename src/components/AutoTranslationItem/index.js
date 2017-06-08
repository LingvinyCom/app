// @flow

import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const AutoTranslationItem = props => (
	<View style={styles.wrapper}>
		<Text style={styles.title}>
			{props.title}
		</Text>
		<Text style={styles.email}>
			{props.email}
		</Text>
	</View>
);

export default AutoTranslationItem;
