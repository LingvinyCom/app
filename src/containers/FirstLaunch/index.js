// @flow

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import SwiperSlider from './../../components/Swiper';
import RoundedButton from './../../components/RoundedButton';
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
      isShowNotificationsModal: true,
    };
  }

  confirmModal() {
    console.log("btn modal Allow was pressed");
    this.setState({ isShowNotificationsModal: false });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <SwiperSlider slides={slides}/>
        <View style={styles.btnWrapper}>
          <RoundedButton
            text={'Skip'}
            onPress={() => navigate('Registration')}
          />
        </View>
        <SendNotificationsModal
            modalVisible={this.state.isShowNotificationsModal}
            hideModal={ () => this.setState({ isShowNotificationsModal: false }) }
            confirmModal={this.confirmModal.bind(this) }
        />
      </View>
    );
  }
}
