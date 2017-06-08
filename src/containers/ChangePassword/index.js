// @flow

import React, {Component} from 'react';
import {View} from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';
import SimpleInput from '../../components/SimpleInput';
import RoundedButton from '../../components/Buttons/Rounded';
import Checkbox from '../../components/Checkbox';

import styles from './styles';

export default class ChangePassword extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			isCheckboxActive: false,
			secureTextEntry: true,
		});
	}
	_onPressCheckbox() {
		this.setState({
			isCheckboxActive: !this.state.isCheckboxActive,
			secureTextEntry: !this.state.secureTextEntry
		});
	}
	render() {
		return(
			<View style={styles.pageContainer}>
				<RouterHeader
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					titlePage={"Change Password"}
					onPressLeftIcon={() => this.props.navigation.goBack()}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<View style={styles.inputBlock}>
						<SimpleInput
							label={"OLD PASSWORD"}
							secureTextEntry={this.state.secureTextEntry}
						/>
						<SimpleInput
							label={"NEW PASSWORD"}
							secureTextEntry={this.state.secureTextEntry}
						/>
						<SimpleInput
							label={"REPEAT NEW PASSWORD"}
							secureTextEntry={this.state.secureTextEntry}
						/>
						<Checkbox
							onPress={this._onPressCheckbox.bind(this)}
							isCheckboxActive={this.state.isCheckboxActive}
						/>
					</View>
					<View style={styles.btnWrapper}>
						<RoundedButton
							text={"Change Password"}
						/>
					</View>
				</View>
			</View>
		);
	}
}