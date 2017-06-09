// @flow

import { Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../../config/colors.config';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.modalBackground,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		width: width - 40,
		padding: 40,
		backgroundColor: COLORS.white,
		alignItems: 'center',
	},
	imgWrapper: {
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		color: COLORS.gray,
		marginBottom: 40,
	},
	rowBtn: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		width: 110,
		height: 46,
		borderRadius: 23,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		marginHorizontal: 10,
		backgroundColor: COLORS.white,
	},
	btnBlue: {
		borderColor: COLORS.blue,
		backgroundColor: COLORS.blue,
	},
	btnText: {
		fontSize: 16,
		color: COLORS.gray,
	},
	btnTextWhite: {
		color: COLORS.white,
	},
});