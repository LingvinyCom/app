// @flow

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {
	View,
	Text,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import Input from '../../../../../components/SimpleInput/';
import Switch from '../../../../../components/Switch/';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../../../../config/colors.config';
import styles from './syles';

@observer
export default class CollapseMenu extends Component {
	state: {
		isCollapsed: boolean,
	}

	constructor(props: Object) {
		super(props);

		this.state = {
			isCollapsed: true,
		};
	}

	toggleMenu() {
		this.setState({ isCollapsed: !this.state.isCollapsed });
	}

	render() {
		const { host, username, hostPassword, serverPort } = this.props.auth;
		const { isCollapsed } = this.state;

		return (
			<View>
				<View style={styles.titleCollapse}>
					<Text style={styles.title}>Aditional Settings</Text>
					<Text
						style={styles.collapseIcon}
						onPress={this.toggleMenu.bind(this)}
					>
						<Icon
							name={isCollapsed ? 'add' : 'remove'}
							size={24}
							color={COLORS.lightGray}
						/>
					</Text>
				</View>
				<Collapsible collapsed={isCollapsed}>
					<View>
						<Input
							label={'HOST NAME'}
							value={host}
							placeholder={'Host Name'}
							onChangeText={(text: string) => this.props.auth.setValue({'host': text})}
						/>
						<Input
							label={'USER NAME'}
							value={username}
							placeholder={'User Name'}
							onChangeText={(text: string) => this.props.auth.setValue({'username': text})}
						/>
						<Input
							label={'PASSWORD'}
							value={hostPassword}
							placeholder={'Password'}
							onChangeText={(text: string) => this.props.auth.setValue({'hostPassword': text})}
						/>
						<Switch
							label={'USE SSL'}
							onPress={(value: boolean) => this.props.auth.setValue({'useSsl': value})}
						/>
						<Input
							keyboardType={'number-pad'}
							label={'SERVER PORT'}
							value={serverPort}
							placeholder={'Server Port'}
							onChangeText={(text: string) => this.props.auth.setValue({'serverPort': text})}
						/>
					</View>
				</Collapsible>
			</View>
		);
	}
}
