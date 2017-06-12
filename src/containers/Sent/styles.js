// @flow

import { StyleSheet, Platform } from 'react-native';

import COLORS from '../../config/colors.config';

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: COLORS.blackWhite,
		// marginTop: Platform.OS === "ios" ? 25 : 0,
	},
	pageContent: {
		backgroundColor: COLORS.blackWhite,
		flex: 1,
		justifyContent: 'space-between',
	},
	inboxList: {
		marginVertical: 20,
		alignItems: 'center',
	},
	swipeoutList: {
		backgroundColor: COLORS.blackWhite,
		marginBottom: 15,
	},
});

export default styles;
