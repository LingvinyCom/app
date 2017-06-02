// @flow

import React from 'react';

import COLORS from '../../config/colors.config';

/* CUSTOM MODULES */
import { Switch } from './switchPlugin';

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
            backgroundActive={COLORS.switchActiveGreen}
            backgroundInactive={COLORS.nonActiveSwitchBackgroundColor}
            circleActiveColor={COLORS.lightgreen}
            circleInActiveColor={COLORS.white}
        />
    );
};

export default CustomSwitch;
