// flow

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import Description from '../../../components/Auth/Description';
import * as Buttons from '../../../components/Buttons/';

import styles from './styles';

export default class Congratulations extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.pageContainer}>
				<Text style={styles.pageTitle}>Congratulations</Text>
				<View style={styles.pageImg}>
					<Image source={require('../../../assets/img/congratulations-img.png')}/>
				</View>
				<Description text={"We've just created your Lingviny account with the same password as your mailbox."}/>
				<Buttons.Rounded
					color={"blue"}
					text={"Continue to inbox"}
					onPress={() => navigate('FirstLaunch', { logedIn: true })}
				/>
			</View>
		);
	}
}
