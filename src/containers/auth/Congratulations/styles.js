// flow

import {StyleSheet} from 'react-native';
import COLORS from '../../../config/colors.config';

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.white,
	},
	pageTitle: {
		fontSize: 24,
		color: COLORS.gray,
		marginBottom: 40,
	},
	pageImg: {
		marginBottom: 40,
	},
});

export default styles;
