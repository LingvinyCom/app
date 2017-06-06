// @flow

import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../config/colors.config';

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
		padding: 30,
	},
	modalCLose: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
	modalTitle: {
		textAlign: 'center',
		fontSize: 19,
		color: COLORS.gray,
		marginBottom: 15,
	},
	wrapperBtn: {
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: COLORS.blackWhite,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		maxWidth: 100,
		height: 25,
	},
	noBorder: {
		borderBottomWidth: 0,
	},
	textBtn: {
		fontSize: 16,
		color: COLORS.gray,
	},
	servicesList: {
		marginBottom: 40,
	},
	policyBtn: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	policyBtntext: {
		fontSize: 12,
		color: COLORS.blue,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;