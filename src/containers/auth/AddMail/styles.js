// @flow

import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../config/colors.config';

const DeviceHeight = Dimensions.get('window').height;

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	screenWrapper: {
		backgroundColor: COLORS.white,
	},
	pageWrapper: {
		justifyContent: 'space-between',
		alignItems: 'stretch',
		backgroundColor: COLORS.white,
		minHeight: DeviceHeight - 115,
	},
	pageContent: {
		paddingTop: 40,
	},
	pageForm: {
		paddingTop: 20,
		marginBottom: 10,
	},
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
