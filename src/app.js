// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Router from './navigation';
import Loader from './components/Loader/';

export default class App extends Component {
	render () {
		return (
			<View style={styles.pageContainer}>
				<Router/>
				<Loader/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
	}
});
