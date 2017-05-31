// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

const Description = (props: Object) => (
	<View>
		<Text>{props.text}</Text>
	</View>
);

export default Description;

const styles = StyleSheet.create({});
