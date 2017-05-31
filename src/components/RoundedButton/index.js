// @flow

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Colors from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;

export default class RoundedButton extends Component {
  // constructor(props: Object): void {
  //   super(props);
  // }

  // props = {}

  // static defaultProps = {
  //   text: 'Continue',
  //   onPress: () => console.log('onPress'),
  // }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
        backgroundColor: Colors.blue,
        height: 46,
        width: WidthDevice - 80,
        marginHorizontal: 40,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 16,
    },
});
