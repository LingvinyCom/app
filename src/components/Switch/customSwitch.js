// @flow

import React from 'react';

import Colors from '../../config/colors.config';

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
            backgroundActive={Colors.switchActiveGreen}
            backgroundInactive={Colors.nonActiveSwitchBackgroundColor}
            circleActiveColor={Colors.lightgreen}
            circleInActiveColor={Colors.white}
        />
    );
};

export default CustomSwitch;
