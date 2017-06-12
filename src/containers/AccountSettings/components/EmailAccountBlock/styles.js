// @flow

import {Dimensions, StyleSheet} from 'react-native';

import COLORS from '../../../../config/colors.config';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrapperTitle: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
	},
	title: {
		fontSize: 18,
		color: COLORS.gray,
	},
	emailsList: {
		alignItems: 'center',
	},
	wrapper: {
		width: width - 40,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: COLORS.lightGray2,
		paddingVertical: 15,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	activeDotAccount: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: COLORS.green,
		marginRight: 10,
	},
	accountEmail: {
		fontSize: 14,
		color: COLORS.lightGray,
		marginRight: 10,
	},
	countEmailsWrapper: {
		paddingVertical: 4,
		paddingHorizontal: 6,
		backgroundColor: COLORS.lightGray2,
		borderRadius: 11,
	},
	countInboxEmails: {
		color: COLORS.lightGray,
		fontSize: 12,
	},
	addBtn: {
		margin: 20,
		width: 180,
		height: 40,
		borderRadius: 20,
		backgroundColor: COLORS.blue,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		fontSize: 14,
		color: COLORS.white,
	},
	dropdownOptions: {
		width: 105,
		borderRadius: 5,
		alignItems: 'center',
	},
	dropdownText: {
		fontSize: 14,
		color: COLORS.gray,
	},
});

export default styles;
