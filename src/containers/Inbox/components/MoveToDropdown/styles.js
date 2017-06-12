// @flow

import {StyleSheet, Dimensions} from 'react-native';

import COLORS from '../../../../config/colors.config';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: height,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  container: {
    width: 155,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    position: 'absolute',
    right: 10,
    top: 40,
  },
  menuBtn: {
    paddingVertical: 17,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  menuText: {
    fontSize: 14,
    color: COLORS.gray,
  },
});

export default styles;
