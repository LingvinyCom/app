// @flow

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import LoginForm from './components/LoginForm/';
import LoginFooter from './components/LoginFooter/';
import PageTitle from './components/PageTitle/';


@inject((allStores) => ({
    auth: allStores.auth,
}))
@observer
export default class Login extends Component {

  /**
   * @TODO: LoginFooter show/hide depends on Route.
   */
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.loginWrapper}>
        <PageTitle text={'New to Lingviny?'}/>
        <LoginForm
          auth={this.props.auth}
        />
        <LoginFooter
          onPress={() => navigate('FirstLaunch')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
