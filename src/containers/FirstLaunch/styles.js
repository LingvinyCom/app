// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../config/colors.config';

/**
 *  @TODO: Add _t_styles.
 */
const styles = {
 wrapper: {
    flex: 1,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: COLORS.white,
    height: 100,
  },
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;
