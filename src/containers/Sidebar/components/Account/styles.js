// @flow

import {StyleSheet} from 'react-native';
import COLORS from '../../../../config/colors.config';

const styles = StyleSheet.create({
	account: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 25,
		paddingHorizontal: 15,
		backgroundColor: COLORS.blackWhite,
		margin: 0,
	},
	accountAvatar: {
		width: 42,
		height: 42,
		borderRadius: 21,
		backgroundColor: COLORS.violet,
		marginRight: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	accountAvatarText: {
		fontSize: 16,
		color: COLORS.white,
	},
	accountName: {
		fontSize: 14,
		color: COLORS.gray,
		marginBottom: 2,
	},
	accountEmail: {
		fontSize: 14,
		color: COLORS.lightGray,
	},
});

export default styles;
