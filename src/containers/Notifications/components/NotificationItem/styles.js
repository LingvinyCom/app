// @flow

import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../../../config/colors.config';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
	inboxItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width - 40,
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: COLORS.white,
	},
	inboxItemHeader: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	inboxItemTitle: {
		fontSize: 14,
		color: COLORS.gray,
	},
	inboxItemTheme: {
		fontSize: 12,
		color: COLORS.lightGray,
		marginBottom: 2,
	},
	inboxItemDescription: {
		fontSize: 12,
		color: COLORS.lightGray,
		marginBottom: 2,
	},
	inboxItemTime: {
		fontSize: 12,
		color: COLORS.gray,
		paddingTop: 3,
	},
	inboxItemDetails: {
		paddingRight: 20,
	},
});

export default styles;
