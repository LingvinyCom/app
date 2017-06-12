// @flow

import {StyleSheet} from 'react-native';
import COLORS from '../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	signinWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		overflow: 'hidden',
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
