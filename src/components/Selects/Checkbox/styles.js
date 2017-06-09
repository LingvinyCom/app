// @flow

import {StyleSheet} from 'react-native';

import COLORS from '../../../config/colors.config';

const styles = StyleSheet.create({
	checkboxWrapper: {
		marginHorizontal: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkboxIcon: {
		marginRight: 15,
		width: 20,
		height: 20,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	isActiveCheckbox: {
		borderColor: COLORS.blue,
	},
	checkboxLabel: {
		fontSize: 14,
		color: COLORS.gray,
	},
});

export default styles;