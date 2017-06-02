// @flow

import React from 'react';
import { Switch } from './switchPlugin';

import COLORS from '../../config/colors.config';

type Props = {
    switchValue: boolean,
    onChangeHandler: Function
};

const CustomSwitch = (props: Props) => {
  const { switchValue, onChangeHandler} = props;
  return (
    <Switch
      value={switchValue}
      onValueChange={onChangeHandler}
      disabled={false}
      activeText={'on'}
      inActiveText={'off'}
    />
  );
};

export default CustomSwitch;
