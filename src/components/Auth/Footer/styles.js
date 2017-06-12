// @flow

import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../config/colors.config';

const {width} = Dimensions.get('window');

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	footer: {
		width: width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
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
