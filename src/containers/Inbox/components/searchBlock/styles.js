// @flow

import {StyleSheet, Dimensions} from 'react-native';

import COLORS from '../../../../config/colors.config';

const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	searchHeader: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputWrapper: {
		backgroundColor: COLORS.white,
		width: DeviceWidth - 40,
		height: 40,
		borderRadius: 20,
		shadowColor: COLORS.black,
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowOffset: {width: 0, height: 0},
	},
	input: {
		backgroundColor: COLORS.white,
		width: DeviceWidth - 40,
		borderRadius: 20,
		height: 40,
		paddingHorizontal: 15,
		paddingVertical: 0,
		margin: 0,
		fontSize: 14,
		color: COLORS.gray,
	},
	searchBtn: {
		position: 'absolute',
		top: 19,
		right: 32,
	},
});

export default styles;
