// @flow

import {StyleSheet} from 'react-native';

import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	titleWrapper: {
		paddingVertical: 18,
		paddingHorizontal: 20,
		backgroundColor: COLORS.blackWhite,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
	},
	title: {
		fontSize: 18,
		color: COLORS.gray,
	},
	emailDescription: {
		alignItems: 'stretch',
	},
	emailDetails: {
		marginHorizontal: 20,
		marginTop: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
	},
	emailLabel: {
		fontSize: 14,
		color: COLORS.gray,
		marginBottom: 8,
	},
	emailName: {
		fontSize: 14,
		color: COLORS.gray,
		marginBottom: 5,
	},
	btnWrapper: {
		margin: 20,
		backgroundColor: COLORS.blue,
		width: 175,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		fontSize: 14,
		color: COLORS.white,
	},
	actionItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
	},
	actionTitle: {
		fontSize: 16,
		color: COLORS.gray,
	},
});

export default styles;
