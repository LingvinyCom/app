// @flow

import React, { Component } from 'react';
import {
	View,
} from 'react-native';
import { inject } from 'mobx-react';
import SwiperSlider from './../../components/Swiper';
import * as Buttons from './../../components/Buttons';
import * as Modals from '../../components/Modals/';

import styles from './styles';

const slides = [
	{
		title: "Translate your emails with perfection",
		description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
		imgUrl: require('../../assets/img/onboarding-img-1.png'),
	},
	{
		title: "Translate your emails with perfection",
		description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
		imgUrl: require('../../assets/img/onboarding-img-1.png'),
	},
	{
		title: "Translate your emails with perfection",
		description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
		imgUrl: require('../../assets/img/onboarding-img-1.png'),
	},
];

@inject((allStores) => ({
	auth: allStores.auth,
}))
export default class FirstLaunch extends Component {
	state: {
		isShowNotificationsModal: boolean,
		activeSlideIdx: number,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowNotificationsModal: false,
			activeSlideIdx: 0,
		};
	}

	onClickSkip(navigate: Function, state: Object) {
		if (state && state.params && state.params.logedIn) {
			this.setState({ isShowNotificationsModal: true });
		} else {
			this.props.auth.setValue({ showLaunch: false });
		}
	}

	disAllowNotifications(navigate: Function) {
		this.setState({ isShowNotificationsModal: false }, () => navigate('Inbox'));
	}

	allowNotifications(navigate: Function) {
		/**
		 * @TODO: Add 'allow push notif' functionality.
		 */
		this.setState({ isShowNotificationsModal: false }, () => navigate('Inbox'));
	}

	renderBtnLabel() {
		if (this.state.activeSlideIdx === (slides.length - 1)) {
			return 'Ok';
		}
		return 'Skip';
	}

	render() {
		const { navigate, state } = this.props.navigation;
		return (
			<View style={styles.wrapper}>
				<SwiperSlider
					slides={slides}
					setActiveSlideIdx={(idx) => this.setState({ activeSlideIdx: idx })}
				/>
				<View style={styles.btnWrapper}>
					<Buttons.Rounded
						text={this.renderBtnLabel()}
						onPress={this.onClickSkip.bind(this, navigate, state)}
					/>
				</View>
				<Modals.AllowNotifications
					show={this.state.isShowNotificationsModal}
					onDecline={this.disAllowNotifications.bind(this, navigate)}
					onAccept={this.allowNotifications.bind(this, navigate)}
				/>
			</View>
		);
	}
}
