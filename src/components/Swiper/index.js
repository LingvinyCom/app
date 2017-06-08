// @flow

import React, {Component} from 'react';
import {
	Dimensions,
	Image,
	Text,
	View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';


const HeightDevice = Dimensions.get('window').height;
const swiperProps = {
	loop: false,
	height: HeightDevice - 100,
	dot: <View style={styles.swiperDot}/>,
	activeDot: <View style={styles.swiperActiveDot}/>,
};

export default class SwiperSlider extends Component {
	render() {
		const {slides} = this.props;
		return (
			<View>
				<Swiper {...swiperProps}>
					{slides.map((slide, idx) => (
						<View style={styles.slide} key={idx}>
							<Text style={styles.onboardingTitle}>{slide.title}</Text>
							<View style={styles.onboardingImageWraper}>
								<Image source={slide.imgUrl}/>
							</View>
							<Text style={styles.onboardingDescription}>
								{slide.description}
							</Text>
						</View>
					))}
				</Swiper>
			</View>
		);
	}
}

