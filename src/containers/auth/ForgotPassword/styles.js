// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */

const styles = {
	forgotPassWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
	},
    form: {
		marginTop: 40,
    },
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
