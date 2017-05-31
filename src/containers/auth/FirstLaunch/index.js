// @flow

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import SwiperSlider from './../../../components/Swiper';
import RoundedButton from './../../../components/RoundedButton';

import Colors from '../../../config/colors.config';

export default class FirstLaunch extends Component {
  render() {
    const slides = [
        {
            title: "Translate your emails with perfection",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
            imgUrl: require('../../../assets/img/onboarding-img-1.png'),
        },
        {
            title: "Translate your emails with perfection",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
            imgUrl: require('../../../assets/img/onboarding-img-1.png'),
        },
        {
            title: "Translate your emails with perfection",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
            imgUrl: require('../../../assets/img/onboarding-img-1.png'),
        },
    ];
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <SwiperSlider slides={slides}/>
        <View style={styles.btnWrapper}>
          <RoundedButton
            text={'Skip'}
            onPress={() => navigate('Login')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: Colors.white,
    height: 100,
  },
});