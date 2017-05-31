import Login from './../containers/auth/Login/';
import FirstLaunch from './../containers/auth/FirstLaunch/';


export default {
  FirstLaunch: {
    screen: FirstLaunch,
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
