import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const Switch = (props: Object) => (
	<View>
		<Text>{props.label}</Text>
		<Text>SWITCH Com-nt</Text>
	</View>
);

export default Switch;

const styles = StyleSheet.create({});
