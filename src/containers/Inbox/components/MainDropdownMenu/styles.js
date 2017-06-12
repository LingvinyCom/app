// @flow

import {StyleSheet} from 'react-native';

import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	container: {
		width: 155,
		borderRadius: 3,
		backgroundColor: COLORS.white,
		position: 'absolute',
		right: 10,
		top: 40,
	},
	menuBtn: {
		paddingVertical: 17,
		marginHorizontal: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
	},
	noBorder: {
		borderBottomWidth: 0,
	},
	menuText: {
		fontSize: 14,
		color: COLORS.gray,
	},
});

export default styles;
