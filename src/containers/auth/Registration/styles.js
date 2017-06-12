// @flow

import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../config/colors.config';

const DeviceHeight = Dimensions.get('window').height;
/**
 *  @TODO: Add _t_styles.
 */

const styles = {
	registrationWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		minHeight: DeviceHeight,
		overflow: 'hidden',
	},
	form: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	}
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
