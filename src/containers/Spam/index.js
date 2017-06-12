// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';

import styles from './styles';

export default class Spam extends Component {
	static navigationOptions = {
		drawerLabel: 'Spam',
		drawerIcon: () => (
			<Image source={require('../../assets/img/spam-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"Spam"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						Spam Screen
					</Text>
				</View>
			</View>
		);
	}
}
