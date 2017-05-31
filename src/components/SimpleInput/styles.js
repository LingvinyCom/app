// @flow

import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const WidthDevice = Dimensions.get('window').width;
const styles = {
	wrapper: {
		width: WidthDevice - 80,
		marginHorizontal: 40,
		borderBottomWidth: 1,
		borderColor: '#c8c7cc',
		marginBottom: 30,
	},
	input: {
		width: WidthDevice - 80,
		height: 30,
		paddingVertical: 0,
		paddingHorizontal: 0,
		fontSize: 14,
		color: Colors.gray,
		overflow: 'hidden',
	},
	label: {
		fontSize: 14,
		color: Colors.gray,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;