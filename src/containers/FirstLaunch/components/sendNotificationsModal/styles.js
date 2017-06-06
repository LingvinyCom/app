// @flow

import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;
/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	modalWrapper: {
		backgroundColor: COLORS.modalBackground,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	modalContent: {
		width: WidthDevice - 40,
		backgroundColor: COLORS.white,
		borderRadius: 3,
	},
	modalBody: {
		padding: 30,
	},
	modalTitle: {
		textAlign: 'center',
		fontSize: 19,
		color: COLORS.gray,
		marginBottom: 15,
	},
	modalText: {
		fontSize: 14,
		color: COLORS.gray,
		lineHeight: 23,
		paddingHorizontal: 10,
		textAlign: 'center',
	},
	btnBlock: {
		flexDirection: 'row',
	},
	btn: {
		flex: 1,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1,
		borderColor: COLORS.blackWhite,
	},
	borderRight: {
		borderRightWidth: 1,
	},
	btnText: {
		fontSize: 18,
		color: COLORS.gray,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
