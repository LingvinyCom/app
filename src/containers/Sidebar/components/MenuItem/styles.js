// @flow

import {StyleSheet} from 'react-native';
import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	menuItemBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 11,
	},
	menuItemTitle: {
		color: COLORS.gray,
		fontSize: 14,
		paddingLeft: 20,
	},
});

export default styles;
