// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  StyleSheet,
	ScrollView,
} from 'react-native';

import Title from '../components/Title/';
import Input from '../../../components/SimpleInput';
import CollapseMenu from './components/CollapseMenu/';
import RoundedButton from './../../../components/RoundedButton/';

import Colors from '../../../config/colors.config';

@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class AddMail extends Component {
	render() {
		const maxLength = 30;
		const { email, password } = this.props.auth;

		return (
			<ScrollView style={styles.scollableWrapper}>
				<View style={styles.pageWrapper}>
					<View style={styles.pageContent}>
						<Title text={'Add Email Account'}/>
						<View style={styles.pageForm}>
							<Input
								label={'EMAIL'}
								value={email}
								onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
								maxLength={maxLength}
							    placeholder={"Enter an Email"}
							/>
							<Input
								label={'PASSWORD'}
								secureTextEntry={true}
								value={password}
								onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
								maxLength={maxLength}
								placeholder={"Enter a Password"}
							/>
						</View>
						<CollapseMenu />
					</View>
					<RoundedButton
						text={'Done'}
						onPress={() => console.log('onPress Done')}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
    scollableWrapper: {
    	flex: 1,
        backgroundColor: Colors.white,
    },
    pageWrapper: {
	    backgroundColor: Colors.white,
	    justifyContent: 'space-between',
    },
    pageContent: {
    	paddingTop: 40,
    },
    pageForm: {
    	paddingTop: 20,
	    marginBottom: 10,
    },
});