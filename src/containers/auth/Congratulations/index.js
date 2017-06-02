// flow

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Description from './../components/Description';
import RoundedButton from '../../../components/RoundedButton';

import styles from './styles';

export default class CongratulationsContainer extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
                <Text style={styles.pageTitle}>
                    Congratulations
                </Text>
                <View style={styles.pageImg}>
                    <Image
                        source={require('../../../assets/img/congratulations-img.png')}
                    />
                </View>
                <Description
                    text={"We've just created your Lingviny account with the same password as your mailbox."}
                />
                <RoundedButton
                    color={"blue"}
                    text={"Continue to inbox"}
                    onPress={ () => console.log(" Continue to inbox btn was pressed") }
                />
            </View>
        );
    }
}
