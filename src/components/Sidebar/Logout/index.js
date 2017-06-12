// @flow

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Modals from '../../../components/Modals/';

import { logout } from '../../../utils/request/';

import COLORS from '../../../config/colors.config';
import styles from './styles';


@inject((allStores) => {
	return {
		auth: allStores.auth,
		app: allStores.app,
	};
})
export default class Logout extends Component {
	state: {
		isShowErrorModal: boolean,
		isShowConfirmationModal: boolean,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowErrorModal: false,
			isShowConfirmationModal: false,
		};
	}

	toggleConfirmationModal(value: boolean) {
		this.setState({ isShowConfirmationModal: value });
	}

	logout() {
		if (this.state.isShowConfirmationModal) {
			this.toggleConfirmationModal(false);
		}

		this.props.app.showLoader = true;

		logout(this.props.auth.userAccount.uid)
			.then((data) => {
				this.props.auth.setValue({ userAccount: {} });
			}).catch((error) => {
			this.setState({isShowErrorModal: true});
			}).finally(() => {
				this.props.app.showLoader = false;
			});
	}

	render() {
		return (
			<View style={styles.middleListMenu}>
				<TouchableOpacity
					onPress={() => this.toggleConfirmationModal(true)}
					style={styles.menuItemBtn}
				>
					<Icon
						name={'keyboard-return'}
						size={20}
						color={COLORS.iconGray}
					/>
					<Text style={styles.menuItemTitle}>Logout</Text>
				</TouchableOpacity>
				<Modals.Notify
					show={this.state.isShowErrorModal}
					type={'error'}
					title={'Unable to Log out'}
					description={'Something went wrong.'}
					btnLabel={'Try again'}
					hideModal={() => this.setState({isShowErrorModal: false})}
				/>
				<Modals.Confirmation
					show={this.state.isShowConfirmationModal}
					onAccept={this.logout.bind(this)}
					onDecline={() => this.toggleConfirmationModal(false)}
				/>
			</View>
		);
	}
}
