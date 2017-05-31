// @flow

import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;
/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	button: {
		backgroundColor: Colors.blue,
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
		borderColor: Colors.btnBorderColor,
	},
	text: {
		color: Colors.white,
		fontSize: 16,
	},
	textGray: {
		color: Colors.gray,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
