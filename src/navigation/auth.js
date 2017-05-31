import FirstLaunch from './../containers/FirstLaunch/';
import Registration from './../containers/auth/Registration/';
import Login from './../containers/auth/Login/';

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
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
};
