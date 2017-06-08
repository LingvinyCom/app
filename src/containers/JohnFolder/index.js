// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader/';

import styles from './styles';

export default class JohnFolder extends Component {
	static navigationOptions = {
		drawerLabel: 'John Folder',
		drawerIcon: () => (
			<Image source={require('../../assets/img/folder-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={() => this.props.navigation.goBack()}
					titlePage={"John Folder"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						John Folder Screen
					</Text>
				</View>
			</View>
		);
	}
}
