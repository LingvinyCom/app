// @flow

import { Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../config/colors.config';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
	wrapper: {
		width: width - 40,
		padding: 20,
		borderRadius: 3,
		backgroundColor: COLORS.white,
		marginBottom: 10,
		shadowColor: COLORS.black,
		shadowRadius: 2,
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 14,
		color: COLORS.gray,
		marginBottom: 4,
	},
	details: {
		alignItems: 'flex-end',
	},
	time: {
		fontSize: 12,
		color: COLORS.gray,
		marginBottom: 5,
	},
	priceWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	factPrice: {
		fontSize: 18,
		color: COLORS.blue,
		marginBottom: 2,
	},
	countWords: {
		fontSize: 12,
		color: COLORS.lightGray,
	}
});
