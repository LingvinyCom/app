// @flow

import { StyleSheet } from 'react-native';
import Colors from '../../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */

const styles = {
	form: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	forgotPasswordWrapper: {
		paddingBottom: 25,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	forgotPasswordBtn: {
		marginHorizontal: 40,
	},
	forgotPasswordText: {
		fontSize: 14,
		color: Colors.lightGray,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
