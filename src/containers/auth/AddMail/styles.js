// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	scollableWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  pageWrapper: {
    backgroundColor: COLORS.white,
  justifyContent: 'space-between',
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
