// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';


export default class SwiperSlider extends Component {
	// constructor(props: Object): void {
	// 	super(props);
	// }

	// props = {}

	// static defaultProps = {}

	render() {
		const { slides } = this.props;
		return (
				<View>
					<Swiper {...swiperProps}>
						{slides.map((slide, idx) => (
								<View style={styles.slide} key={idx}>
									<Text style={styles.text}>slide</Text>
								</View>
							))}
					</Swiper>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  btnWrapper: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

const swiperProps = {
  loop: false,
  height: 580,
};