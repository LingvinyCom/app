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
		const maxLength = 30;
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
							maxLength={maxLength}
						/>
						<Input
							label={'USER NAME'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'userName': text})}
							maxLength={maxLength}
						/>
						<Input
							label={'PASSWORD'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'password': text})}
							maxLength={maxLength}
						/>

						<Switch 
							label={'USE SSL'}
							onPress={() => console.log('onPress Switch')}
						/>

						<Input
							label={'AUTHENTICATION'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'authentication': text})}
							maxLength={maxLength}
						/>
						<Input
							label={'SERVER PORT'}
							value={'...'}
							onChangeText={(text: string) => this.props.auth.setValue({'serverPort': text})}
							maxLength={maxLength}
						/>
					</View>
				</Collapsible>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});
