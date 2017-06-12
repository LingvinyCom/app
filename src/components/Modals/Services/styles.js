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
	},
	modalBody: {
		marginTop: 30,
	},
	modalCLose: {
		position: 'absolute',
		top: 10,
		right: 20,
	},
	modalTitle: {
		textAlign: 'center',
		fontSize: 19,
		color: COLORS.gray,
		marginBottom: 15,
	},
	wrapperBtn: {
		marginHorizontal: 60,
		paddingVertical: 13,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
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
		marginBottom: 30,
	},
	policyBtntext: {
		fontSize: 12,
		color: COLORS.blue,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;