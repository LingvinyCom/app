// @flow

import {StyleSheet} from 'react-native';

import COLORS from '../../config/colors.config';

export default StyleSheet.create({
	pageContainer: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	pageContent: {
		flex: 1,
		backgroundColor: COLORS.blackWhite,
	},
	ordersList: {
		alignItems: 'center',
		marginVertical: 20,
	},
});