// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	container: {
		width: 56,
		height: 30,
		borderRadius: 15,
		backgroundColor: COLORS.black,
	},
	animatedContainer: {
		flex: 1,
		width: 56,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		borderColor: 'transparent',
	},
	text: {
		color: 'transparent',
		backgroundColor: 'transparent',
	},
	paddingRight: {
		paddingRight: 1,
	},
	paddingLeft: {
		paddingLeft: 1,
	},
	switchBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 35,
		marginHorizontal: 40,
	},
	switchLabel: {
		fontSize: 14,
		color: COLORS.gray,
	},
	switchWrapper: {
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
