// @flow

import React, { Component } from 'react';
import { Text,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type Props = {
    iconClass: string,
    title: string,
    onPress: Function,
};

const MenuItem = (props: Props) => {
    const { iconClass, title, onPress } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.menuItemBtn}
        >
            <Icon
                name={iconClass}
                size={20}
                color={'rgba(0,0,0,0.23)'}
            />
            <Text style={styles.menuItemTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MenuItem;
