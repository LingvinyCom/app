// @flow

import { StyleSheet } from 'react-native';

import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	infoBlock: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: COLORS.blue,
		borderRadius: 3,
		marginTop: 20,
		marginHorizontal: 20,
	},
	infoBlockText: {
		color: COLORS.white,
		fontSize: 14,
		lineHeight: 18,
		marginBottom: 15,
	},
	infoBlockBtn: {
		width: 114,
		height: 32,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: COLORS.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoBlockBtnText: {
		color: COLORS.white,
		fontSize: 14,
	},
});

export default styles;
