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

export default class SwiperSlider extends Component {
	// constructor(props: Object): void {
	// 	super(props);
	// }

	// props = {}

	// static defaultProps = {}

	render() {
		const {slides} = this.props;
		return (
			<View>
				<Swiper {...swiperProps}>
					{slides.map((slide, idx) => (
						<View style={styles.slide} key={idx}>
							<Text style={styles.onboardingTitle}>
								{slide.title}
							</Text>
							<View style={styles.onboardingImageWraper}>
								<Image
									source={slide.imgUrl}
								/>
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


const swiperProps = {
	loop: false,
	height: HeightDevice - 100,
	dot: <View style={styles.swiperDot}/>,
	activeDot: <View style={styles.swiperActiveDot}/>,
};
