// @flow

import React, { Component } from 'react';
import { inject } from 'mobx-react';
import {
  View,
    ScrollView,
  StyleSheet,
} from 'react-native';

import Title from '../components/Title/';
import Description from '../components/Description/';
import Form from '../components/Form/';
import RoundedButton from './../../../components/RoundedButton/';
import Footer from '../components/Footer/';
import Logotip from '../components/Logo';
import ServicesModal from '../../../components/servicesModal';

import Colors from '../../../config/colors.config';

@inject((allStores) => ({
    auth: allStores.auth,
}))

// type Props = {
//     isShowServicesModal : boolean,
// };

export default class Registration extends Component {
    state: {
        isShowServicesModal : boolean,
    };
    constructor(props: Object) {
        super(props);
        this.state = {
            isShowServicesModal : false
        };
    }

  registration() {
		console.log('onPress registration');
	}

  /**
   * @TODO: Footer show/hide depends on Route.
   */
  render() {
    const { navigate } = this.props.navigation;
    const servicesList = [
        {
            title: 'google',
            imgUrl: require('../../../assets/img/google.png'),
            onPress: () => console.log("onPress btn google"),
        },
        {
            title: 'exchange',
            imgUrl: require('../../../assets/img/exchange.png'),
            onPress: () => console.log("onPress btn exchange"),
        },
        {
            title: 'yahoo',
            imgUrl: require('../../../assets/img/yahoo.png'),
            onPress: () => console.log("onPress btn yahoo"),
        },
        {
            title: 'icloud',
            imgUrl: require('../../../assets/img/icloud.png'),
            onPress: () => console.log("onPress btn icloud"),
        },
        {
            title: 'outlook',
            imgUrl: require('../../../assets/img/outlook.png'),
            onPress: () => console.log("onPress btn outlook"),
        },
    ];
    return (
        <ScrollView>
            <View style={styles.loginWrapper}>
                <Logotip/>
                <Title text={'New to Lingviny?'}/>
                <Description
                    text={`Please enter your credentials for the existing mailbox you'll be working with and we'll take care of all the rest`}
                />
                <Form
                    auth={this.props.auth}
                    onPress={this.registration.bind(this)}
                    isShowForgotPassword={true}
                    component={
                        <RoundedButton
                            text={'Choose Mail Service'}
                            onPress={() => this.setState({ isShowServicesModal: true })}
                            color={'transparent'}
                        />
                    }
                />
                <Footer
                    text={'Already a member?'}
                    clickableText={'Login'}
                    onPressText={() => navigate('Login')}
                />
                <ServicesModal
                    modalVisible={this.state.isShowServicesModal}
                    hideModal={() => this.setState({ isShowServicesModal: false }) }
                    servicesList={servicesList}
                    onPressPolicy={() => console.log("onPress Policy")}
                    onPressOther={() => console.log("onPress btn Other") }
                />
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
