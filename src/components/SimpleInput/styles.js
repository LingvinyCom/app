// @flow

import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const WidthDevice = Dimensions.get('window').width;
const styles = {
	wrapper: {
		width: WidthDevice - 80,
		marginHorizontal: 40,
		borderBottomWidth: 1,
		borderColor: COLORS.btnBorderColor,
		marginBottom: 30,
	},
	input: {
		width: WidthDevice - 80,
		height: 30,
		paddingVertical: 0,
		paddingHorizontal: 0,
		fontSize: 14,
		color: COLORS.gray,
		overflow: 'hidden',
	},
	label: {
		fontSize: 14,
		color: COLORS.gray,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;