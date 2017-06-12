// @flow

import { Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../config/colors.config';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
	pageContainer: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	pageContent: {
		flex: 1,
		backgroundColor: COLORS.blackWhite,
	},
	pageTitle: {
		textAlign: 'center',
		paddingHorizontal: 40,
		paddingVertical: 25,
		fontSize: 16,
		color: COLORS.gray,
	},
	textareaWrapper: {
		width: width - 40,
		height: 235,
		marginHorizontal: 20,
		borderWidth: 1,
		borderColor: COLORS.btnBorderColor,
		borderRadius: 3,
		justifyContent: 'space-between',
		overflow: 'hidden',
	},
	inputWrapper: {
		width: width - 40,
		height: 235 - 55,
		padding: 15,
		justifyContent: 'flex-start',
	},
	input: {
		width: width - 70,
		height: 155,
		padding: 0,
		margin: 0,
		fontSize: 14,
		color: COLORS.gray,
	},
	btnBlockControls: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 52,
		backgroundColor: COLORS.lightGray2,
		borderTopWidth: 1,
		borderColor: COLORS.btnBorderColor,
	},
	btnControl: {
		paddingHorizontal: 15,
		borderRightWidth: 1,
		borderColor: COLORS.btnBorderColor,
	},
	autoTranslateWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: 20,
	},
	autoTranslateLabel: {
		fontSize: 14,
		color: COLORS.gray,
	},
	languagesWrapper: {
		padding: 20,
		backgroundColor: COLORS.blackWhite,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: COLORS.btnBorderColor,
	},
	languagesTitle: {
		fontSize: 16,
		color: COLORS.gray,
	},
	languagesList: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 30,
	},
	languagesNotification: {
		fontSize: 14,
		color: COLORS.btnBorderColor,
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 10,
	},
	languageWrapper: {
		width: width - 40,
		paddingHorizontal: 20,
		paddingVertical: 15,
		backgroundColor: COLORS.white,
		borderRadius: 3,
		marginBottom: 10,
	},
	languageName: {
		fontSize: 14,
		color: COLORS.gray,
	},
});
