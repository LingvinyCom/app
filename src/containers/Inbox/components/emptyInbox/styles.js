// @flow

import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../../config/colors.config';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height - 150,
		justifyContent: 'center',
		alignItems: 'center',
	},
	countMessages: {
		position: 'absolute',
		right: -18,
		bottom: -18,
		width: 36,
		height: 36,
		borderRadius: 18,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.btnBorderColor,
	},
	countMessagesText: {
		color: COLORS.white,
		fontSize: 20,
	},
	imgWrapper: {
		marginBottom: 55,
	},
	text: {
		fontSize: 18,
		color: COLORS.gray,
	},
});

export default styles;
