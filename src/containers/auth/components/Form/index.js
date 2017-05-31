// @flow

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	// Image,
} from 'react-native';
import { observer } from 'mobx-react';
import Input from '../../../../components/SimpleInput/';
import RoundedButton from '../../../../components/RoundedButton/';

import Colors from '../../../../config/colors.config';
import TouchableItem from "../../../../../node_modules/react-navigation/lib/views/TouchableItem";

@observer
export default class Form extends Component {
	// props = {}

	// static defaultProps = {}

	render() {
		const { email, password, requestError } = this.props.auth;
		const { component, isShowForgotPassword } = this.props;
		const maxLength = 30;
		/**
		 *  @TODO: Show/hide error auth modal depends on  requestError.
		 *  Place maxLength to global config.
		 */
		console.log('FORM --->', this.props.component);
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
				    placeholder={'Enter an Email'}
					placeholderTextColor={Colors.lightGray}
					underlineColorAndroid={'transparent'}
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
					placeholder={'Enter a Password'}
					placeholderTextColor={Colors.lightGray}
					underlineColorAndroid={'transparent'}
				/>
				{
					isShowForgotPassword &&
					<View style={styles.forgotPasswordWrapper}>
						<TouchableOpacity style={styles.forgotPasswordBtn}>
							<Text style={styles.forgotPasswordText}>
								Forgot Password
							</Text>
						</TouchableOpacity>
					</View>
				}
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
    alignItems: 'stretch',
  },
    forgotPasswordWrapper: {
  	    paddingBottom: 25,
	    alignItems: 'flex-end',
	    justifyContent: 'center',
    },
    forgotPasswordBtn: {
  	    marginHorizontal: 40,
    },
    forgotPasswordText: {
  	    fontSize: 14,
	    color: Colors.lightGray,
    },
});
