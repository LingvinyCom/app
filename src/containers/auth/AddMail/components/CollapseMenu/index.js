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
		isCollapsed: Boolean,
	}

	constructor(props) {
		super(props);

		this.state = {
			isCollapsed: true,
		};
	}

	toggleMenu() {
		this.setState({ isCollapsed: !this.state.isCollapsed });
	}

	render() {
		const { hostName, userName, password, authentication, serverPort } = this.props.auth;
		const { isCollapsed } = this.state;
		// const iconProps = {
		// 	name: "add",
		// 	size: {24,
		// 	color: {COLORS.lightGray};
		// };

		return (
			<View>
				<View style={styles.titleCollapse}>
					<Text style={styles.title}>Aditional Settings</Text>
					<Text
						style={styles.collapseIcon}
						onPress={this.toggleMenu.bind(this)}
					>
						{
							this.state.isCollapsed &&
							<Icon
								name="add"
								size={24}
								color={COLORS.lightGray} /> ||
							<Icon
								name="remove"
								size={24}
								color={COLORS.lightGray} />
						}
					</Text>
				</View>
				<Collapsible collapsed={this.state.isCollapsed}>
					<View>
						<Input
							label={'HOST NAME'}
							value={hostName}
							onChangeText={(text: string) => this.props.auth.setValue({'hostName': text})}
						/>
						<Input
							label={'USER NAME'}
							value={userName}
							onChangeText={(text: string) => this.props.auth.setValue({'userName': text})}
						/>
						<Input
							label={'PASSWORD'}
							value={password}
							onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
						/>
						<Switch
							label={'USE SSL'}
							onPress={() => console.log('onPress Switch')}
						/>
						<Input
							label={'AUTHENTICATION'}
							value={authentication}
							onChangeText={(text: string) => this.props.auth.setValue({'authentication': text})}
						/>
						<Input
							label={'SERVER PORT'}
							value={serverPort}
							onChangeText={(text: string) => this.props.auth.setValue({'serverPort': text})}
						/>
					</View>
				</Collapsible>
			</View>
		);
	}
}
