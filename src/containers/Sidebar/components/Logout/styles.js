// @flow

import {StyleSheet} from 'react-native';
import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	middleListMenu: {
		marginVertical: 5,
		marginLeft: 20,
	},
	menuItemBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 11,
	},
	menuItemTitle: {
		color: COLORS.gray,
		fontSize: 14,
		paddingLeft: 30,
	},
});

export default styles;
