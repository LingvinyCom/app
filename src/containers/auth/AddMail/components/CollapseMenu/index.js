import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import Input from '../../../../../components/SimpleInput/';
import Switch from '../../../../../components/Switch/';

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
				<View>
					<Text>Aditional Settings</Text>
					<Text onPress={this.toggleMenu.bind(this)}>+</Text>
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

const styles = StyleSheet.create({

});
