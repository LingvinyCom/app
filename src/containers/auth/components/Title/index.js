// @flow

import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

const Title = (props: Object) => (
	<View>
		<Text>{props.text}</Text>
	</View>
);

export default Title;

const styles = StyleSheet.create({});
