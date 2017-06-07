// @flow

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import RouterHeader from '../../components/Inbox/routerHeader';

import styles from './styles';

export default class TranslatedItems extends Component {
	static navigationOptions = {
		drawerLabel: 'Translated Items',
		drawerIcon: () => (
			<Image source={require('../../assets/img/translated-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
					titlePage={"Translate Into"}
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<Text>
						TranslatedItems Screen
					</Text>
				</View>
			</View>
		);
	}
}
