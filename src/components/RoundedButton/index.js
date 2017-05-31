// @flow

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';


export default class RoundedButton extends Component {
  // constructor(props: Object): void {
  //   super(props);
  // }

  // props = {}

  // static defaultProps = {
  //   text: 'Continue',
  //   color: '',
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

