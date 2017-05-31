// @flow

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import SwiperSlider from './../../../components/Swiper';
import RoundedButton from './../../../components/RoundedButton';

export default class FirstLaunch extends Component {
  render() {
    const slides = ['first', 'second', 'third'];
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
  },
  btnWrapper: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});