// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/routerHeader';

import styles from './styles';

export default class Archive extends Component {
	static navigationOptions = {
		drawerLabel: 'Archive',
		drawerIcon: () => (
			<Image source={require('../../assets/img/archive-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"Archive"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						Archive Screen
					</Text>
				</View>
			</View>
		)
	}
}
