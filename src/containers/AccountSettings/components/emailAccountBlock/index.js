// flow

import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import COLORS from '../../../../config/colors.config';

export default class EmailAccountBlock extends Component {
	constructor(props:Props) {
		super(props);
		this.state = {
			isEmailActive: "johnsmith@gmail.com",
			isEmailActiveIndex: 0,
		};
	}

	_chooseItem(item, index) {
		this.setState({
			isEmailActive: item.accountEmail,
			isEmailActiveIndex: index,
		});
	}

	render() {
		const { emailsList, onPressAddEmailAccount } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.wrapperTitle}>
					<Text style={styles.title}>
						Email Accounts
					</Text>
				</View>
				<View style={styles.emailsList}>
					{
						emailsList.map((item, index) =>
							<TouchableOpacity
								key={index}
								style={styles.wrapper}
								onPress={() => {this._chooseItem(item, index);}}
							>
								<View style={styles.details}>
									{
										(index === this.state.isEmailActiveIndex) && <View style={styles.activeDotAccount} />
									}
									<Text style={styles.accountEmail}>
										{item.accountEmail}
									</Text>
									<View style={styles.countEmailsWrapper}>
										<Text style={styles.countInboxEmails}>
											{item.countInboxEmails}
										</Text>
									</View>
								</View>
								{
									(index === this.state.isEmailActiveIndex) &&
									<TouchableOpacity
										style={styles.editEmailBtn}
										onPress={item.onPressEditEmail}
									>
										<Icon
											name="more-vert"
											size={26}
											color={COLORS.gray}
										/>
									</TouchableOpacity>
								}
							</TouchableOpacity>
						)
					}
				</View>
				<TouchableOpacity
					style={styles.addBtn}
					onPress={onPressAddEmailAccount}
				>
					<Text style={styles.btnText}>
						Add Email Account
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
