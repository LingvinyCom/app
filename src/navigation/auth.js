import FirstLaunch from './../containers/FirstLaunch/';
import Registration from './../containers/auth/Registration/';
import AddMail from './../containers/auth/AddMail/';
import SignIn from './../containers/auth/SignIn/';
import ForgotPassword from './../containers/auth/ForgotPassword/';

/**
 *  @TODO: Place navigationOptions global.
 */
export default {
  FirstLaunch: {
    screen: FirstLaunch,
    navigationOptions: {
      header: null,
    },
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      header: null,
    },
  },
  AddMail: {
    screen: AddMail,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null,
    },
  },
};
