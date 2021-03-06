// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	titleCollapse: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		paddingHorizontal: 40,
		backgroundColor: COLORS.blackWhite,
		marginBottom: 30,
	},
	title: {
		fontSize: 16,
		color: COLORS.gray,
	},
	collapseIcon: {
		fontSize: 16,
		color: COLORS.gray,
	},
	switchWrapper: {
		marginBottom: 35,
		marginHorizontal: 40,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
