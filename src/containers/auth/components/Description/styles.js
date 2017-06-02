// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	wrapper: {
		paddingHorizontal: 60,
		marginBottom: 30,
	},
	text: {
		fontSize: 14,
		color: COLORS.lightGray,
		lineHeight: 20,
		textAlign: 'center',
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
