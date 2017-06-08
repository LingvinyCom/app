// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';

import styles from './styles';

export default class OfficeEmail extends Component {
	static navigationOptions = {
		drawerLabel: 'Office Email',
		drawerIcon: () => (
			<Image source={require('../../assets/img/folder-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"OfficeEmail"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						Office Email Screen
					</Text>
				</View>
			</View>
		);
	}
}
