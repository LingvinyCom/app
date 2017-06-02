// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	loader: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		backgroundColor: COLORS.black,
		opacity: 0.3,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		flex: 1,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
