// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

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
        backgroundColor: 'blue',
        height: 40,
        width: 200,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
