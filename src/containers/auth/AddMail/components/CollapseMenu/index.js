import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Collapsible from 'react-native-collapsible';
import Input from '../../../../../components/SimpleInput/';
import Switch from '../../../../../components/Switch/';
import Colors from '../../../../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    titleCollapse: {
    	flexDirection: 'row',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    height: 60,
	    paddingHorizontal: 40,
	    backgroundColor: '#F5F6F8',
	    marginBottom: 30,
    },
    title: {
        fontSize: 16,
	    color: Colors.gray,
    },
    collapseIcon: {
        fontSize: 16,
        color: Colors.gray,
    },
});
