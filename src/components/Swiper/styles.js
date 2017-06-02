// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
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
	onboardingTitle: {
		fontSize: 20,
		lineHeight: 28,
		color: COLORS.gray,
		paddingHorizontal: 60,
		marginBottom: 30,
		textAlign: 'center',
	},
	onboardingImageWraper: {
		marginBottom: 30,
	},
	onboardingDescription: {
		paddingHorizontal: 50,
		fontSize: 14,
		lineHeight: 23,
		color: COLORS.gray,
		textAlign: 'center',
	},
	swiperDot: {
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.borderColor,
		width: 8,
		height: 8,
		borderRadius: 4,
		margin: 5,
	},
	swiperActiveDot: {
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: COLORS.blue,
		width: 8,
		height: 8,
		borderRadius: 4,
		margin: 5,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
