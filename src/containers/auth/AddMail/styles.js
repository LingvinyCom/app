// @flow

import { StyleSheet } from 'react-native';
import Colors from '../../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	scollableWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pageWrapper: {
    backgroundColor: Colors.white,
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
