// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Title from '../components/Title/';
import Input from '../../../components/SimpleInput';
import CollapseMenu from './components/CollapseMenu/';
import RoundedButton from './../../../components/RoundedButton/';


@inject((allStores) => ({
    auth: allStores.auth,
}))
export default class AddMail extends Component {
	render() {
		const maxLength = 30;
		const { email, password } = this.props.auth;

		return (
			<View>
				<Title text={'Add Email Account'}/>
					<View>
						<Input
							label={'EMAIL'}
							value={email}
							onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
							maxLength={maxLength}
						/>
						<Input
							label={'PASSWORD'}
							secureTextEntry={true}
							value={password}
							onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
							maxLength={maxLength}
						/>
					</View>

				<CollapseMenu />

				<RoundedButton
					text={'Done'}
					onPress={() => console.log('onPress Done')}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({});