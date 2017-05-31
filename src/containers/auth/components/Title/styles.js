// @flow

import { StyleSheet } from 'react-native';
import Colors from '../../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */

const styles = {
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	text: {
		fontSize: 22,
		color: Colors.gray,
		paddingBottom: 7,
	},
	border: {
		width: 45,
		height: 3,
		backgroundColor: Colors.green,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
