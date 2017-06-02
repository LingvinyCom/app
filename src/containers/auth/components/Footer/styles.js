// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 45,
	},
	text: {
		fontSize: 14,
		color: COLORS.lightGray,
		paddingRight: 12,
	},
	clickableText: {
		fontSize: 14,
		color: COLORS.green,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
