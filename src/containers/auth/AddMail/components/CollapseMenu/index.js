import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import Input from '../../../../../components/SimpleInput/';
import Switch from '../../../../../components/Switch/';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../../../config/colors.config';
import styles from './syles';


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
								color={Colors.lightGray} /> ||
							<Icon
								name="remove"
								size={24}
								color={Colors.lightGray} />
						}
					</Text>
				</View>
				<Collapsible collapsed={this.state.isCollapsed}>
					<View>
						<Input
							label={'HOST NAME'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'hostName': text})}
						/>
						<Input
							label={'USER NAME'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'userName': text})}
						/>
						<Input
							label={'PASSWORD'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
						/>
						<Switch
							label={'USE SSL'}
							onPress={() => console.log('onPress Switch')}
						/>
						<Input
							label={'AUTHENTICATION'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'authentication': text})}
						/>
						<Input
							label={'SERVER PORT'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'serverPort': text})}
						/>
					</View>
				</Collapsible>
			</View>
		);
	}
}
