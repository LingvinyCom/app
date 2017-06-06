// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
	ScrollView,
} from 'react-native';

import Title from '../../../components/Auth/Title/';
import Input from '../../../components/SimpleInput';
import CollapseMenu from './components/CollapseMenu/';
import * as Buttons from './../../../components/Buttons/';

import styles from './styles';


@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class AddMail extends Component {
	render() {
		const { email, password } = this.props.auth;

		return (
			<View style={styles.screenWrapper}>
				<ScrollView>
					<View style={styles.pageWrapper}>
						<View style={styles.pageContent}>
							<Title text={'Add Email Account'}/>
							<View style={styles.pageForm}>
								<Input
									label={'EMAIL'}
									value={email}
									onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
									placeholder={"Enter an Email"}
									keyboardType="email-address"
								/>
								<Input
									label={'PASSWORD'}
									secureTextEntry={true}
									value={password}
									onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
									placeholder={"Enter a Password"}
								/>
							</View>
							<CollapseMenu auth={this.props.auth}/>
						</View>
						<View>
							<Buttons.Rounded
								text={'Done'}
								onPress={() => console.log('onPress Done')}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
