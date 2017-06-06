// @flow

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';


export default class RoundedButton extends Component {
  render() {
    const styleText = this.props.color === 'transparent' ? [styles.text, styles.textGray] : styles.text;
    const styleButton = this.props.color === 'transparent' ? [styles.button, styles.transparentBtn]  : styles.button;

    return (
      <TouchableOpacity
        style={styleButton}
        onPress={this.props.onPress}
        color={this.props.color}
      >
        <Text style={styleText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
