// @flow

import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../../config/colors.config';

const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	newMessageBtnBlock: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
		backgroundColor: 'transparent',
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: DeviceWidth,
		shadowColor: COLORS.blue,
		shadowRadius: 6,
		shadowOffset: {width: 0, height: 0},
		shadowOpacity: 0.5,
	},
	newMessageBtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: COLORS.blue,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
