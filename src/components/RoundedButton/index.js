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
        style={ this.props.color === 'transparent' ? [styles.button, styles.transparentBtn]  : styles.button}
        onPress={this.props.onPress}
        color={this.props.color}
      >
        <Text
            style={this.props.color === 'transparent' ? [styles.text, styles.textGray] : [styles.text]}
        >
            {this.props.text}
        </Text>
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
        marginBottom: 30,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparentBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.btnBorderColor,
    },
    text: {
        color: Colors.white,
        fontSize: 16,
    },
    textGray: {
        color: Colors.gray,
    },
});
