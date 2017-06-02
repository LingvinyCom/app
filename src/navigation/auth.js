import FirstLaunch from './../containers/FirstLaunch/';
import Registration from './../containers/auth/Registration/';
import AddMail from './../containers/auth/AddMail/';
import SignIn from './../containers/auth/SignIn/';
import ForgotPassword from './../containers/auth/ForgotPassword/';
import Congratulations from './../containers/auth/Congratulations';
import Sidebar from './../containers/Sidebar';
import Inbox from './../containers/Inbox';

/**
 *  @TODO: Place navigationOptions header:null global.
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
  Congratulations: {
    screen: Congratulations,
    navigationOptions: {
      header: null,
    }
  },
  Sidebar: {
    screen: Sidebar,
    navigationOptions: {
      header: null,
      }
  },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            header: null,
        }
    },
};
