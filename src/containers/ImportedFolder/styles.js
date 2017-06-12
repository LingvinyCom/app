// @flow

import { StyleSheet } from 'react-native';

import COLORS from '../../config/colors.config';

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		alignItems: 'stretch',
		backgroundColor: COLORS.white,
	},
	pageContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
