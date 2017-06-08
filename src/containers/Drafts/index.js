// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';

import styles from './styles';

export default class Drafts extends Component {
	static navigationOptions = {
		drawerLabel: 'Drafts',
		drawerIcon: () => (
			<Image source={require('../../assets/img/drafts-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"Drafts"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						Drafts Screen
					</Text>
				</View>
			</View>
		);
	}
}
