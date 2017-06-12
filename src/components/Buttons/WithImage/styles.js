// @flow

import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;
/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	button: {
		backgroundColor: COLORS.blue,
		height: 46,
		width: WidthDevice - 80,
		marginHorizontal: 40,
		marginBottom: 30,
		borderRadius: 23,
		justifyContent: 'center',
		alignItems: 'center',
	},
	transparentBtn: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: COLORS.btnBorderColor,
	},
	img: {
		flex:1,
		marginVertical: 5,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
