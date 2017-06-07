// @flow

import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import COLORS from '../../../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AccountInfoBlock extends Component {
	render() {
		const {actionsList} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>
						Account Info
					</Text>
				</View>
				<View style={styles.emailDescription}>
					<View style={styles.emailDetails}>
						<Text style={styles.emailLabel}>
							EMAIL
						</Text>
						<Text style={styles.emailName}>
							johnsmith@gmail.com
						</Text>
					</View>
					<TouchableOpacity
						style={styles.btnWrapper}
						onPress={() => console.log("change password btn was pressed")}
					>
						<Text
							style={styles.btnText}
						>
							Change Password
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.accountActions}>
					{
						actionsList.map((item, index) =>
						<TouchableOpacity
							key={index}
						  onPress={item.onPress}
						  style={index === 0 ? [styles.actionItem, {borderTopWidth: 1}] : styles.actionItem}
						>
							<Text style={styles.actionTitle}>
								{item.title}
							</Text>
							<Icon
								name="keyboard-arrow-right"
							  size={30}
							  color={COLORS.btnBorderColor}
							/>
						</TouchableOpacity>
						)
					}
				</View>
			</View>
		)
	}
}
