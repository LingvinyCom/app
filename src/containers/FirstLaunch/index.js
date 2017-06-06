// @flow

import React, {Component} from 'react';
import {
	View,
} from 'react-native';
import SwiperSlider from './../../components/Swiper';
import * as Buttons from './../../components/Buttons';
import SendNotificationsModal from './components/sendNotificationsModal';

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

export default class FirstLaunch extends Component {
	state: {
		isShowNotificationsModal: boolean,
	}

	constructor(props: Object) {
		super(props);
		this.state = {
			isShowNotificationsModal: false,
		};
	}

	confirmModal() {
		/**
		 * @TODO: Add 'allow push notif' functionality.
		 */
		console.log("btn modal Allow was pressed");
		this.setState({isShowNotificationsModal: false});
	}

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={styles.wrapper}>
				<SwiperSlider slides={slides}/>
				<View style={styles.btnWrapper}>
					<Buttons.Rounded
						text={'Skip'}
						onPress={() => navigate('Registration')}
					/>
				</View>
				<SendNotificationsModal
					modalVisible={this.state.isShowNotificationsModal}
					hideModal={ () => this.setState({isShowNotificationsModal: false}) }
					confirmModal={this.confirmModal.bind(this) }
				/>
			</View>
		);
	}
}
