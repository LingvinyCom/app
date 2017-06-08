// @flow

import { StyleSheet, Dimensions } from 'react-native';

import COLORS from '../../../config/colors.config';
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
		paddingRight: 20,
		fontSize: 14,
		color: COLORS.gray,
	},
	inboxItemStatus: {
		paddingVertical: 3,
		paddingHorizontal: 5,
		backgroundColor: COLORS.green,
		borderRadius: 3,
		overflow: 'hidden',
		color: COLORS.white,
		fontSize: 12,
	},
	inboxItemStatusPr: {
		backgroundColor: COLORS.orange,
	},
	inboxItemStatusWr: {
		backgroundColor: COLORS.red,
	},
	inboxItemTheme: {
		fontSize: 14,
		color: COLORS.gray,
		lineHeight: 20,
	},
	inboxItemDescription: {
		fontSize: 12,
		color: COLORS.lightGray,
	},
	inboxItemTime: {
		fontSize: 12,
		color: COLORS.gray,
		paddingTop: 3,
	},
});

export default styles;
