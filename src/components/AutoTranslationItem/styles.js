// @flow

import { Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../config/colors.config';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
	wrapper: {
		width: width - 40,
		backgroundColor: COLORS.white,
		borderRadius: 3,
		paddingTop: 20,
		paddingHorizontal: 20,
		paddingBottom: 15,
	},
	title: {
		fontSize: 14,
		color: COLORS.gray,
		marginBottom: 2,
	},
	email: {
		fontSize: 12,
		color: COLORS.lightGray,
	},
});
