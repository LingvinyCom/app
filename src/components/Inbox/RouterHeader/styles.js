// @flow

import { StyleSheet } from 'react-native';

import COLORS from '../../../config/colors.config';

const styles = StyleSheet.create({
	routerHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: COLORS.headerBackgroundColor,
	},
	routerTitle: {
		fontSize: 18,
		color: COLORS.gray,
	},
	routerIconLeft: {
		width: 25,
	},
});

export default styles;
