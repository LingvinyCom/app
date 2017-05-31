// @flow

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	// Image,
} from 'react-native';
import { observer } from 'mobx-react';
import Input from '../../../../components/SimpleInput/';
import RoundedButton from '../../../../components/RoundedButton/';


@observer
export default class Form extends Component {
	// props = {}

	// static defaultProps = {}

	render() {
		const { email, password, requestError } = this.props.auth;
		const { component } = this.props;
		const maxLength = 30;
		/**
		 *  @TODO: Show/hide error auth modal depends on  requestError.
		 *  Place maxLength to global config.
		 */
		return (
			<View style={styles.form}>
				{/*<Image
					style={styles.logo}
					source={require('./../../../*.png')}
				/>*/}
				<Input
					label={'EMAIL'}
					value={email}
					onChangeText={(text: string) => this.props.auth.setValue({'email': text})}
					maxLength={maxLength}
				/>
				{
					component
					? component
					: null
				}
				<Input
					label={'PASSWORD'}
					secureTextEntry={true}
					value={password}
					onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
					maxLength={maxLength}
				/>
				<RoundedButton
					text={'Login'}
					onPress={this.props.onPress}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
