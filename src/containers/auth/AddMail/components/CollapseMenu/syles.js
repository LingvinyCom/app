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
		backgroundColor: '#F5F6F8',
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
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
