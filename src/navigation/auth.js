import Registration from './../containers/auth/Registration/';
import AddMail from './../containers/auth/AddMail/';
import SignIn from './../containers/auth/SignIn/';
import ForgotPassword from './../containers/auth/ForgotPassword/';
import FirstLaunch from './../containers/FirstLaunch/';


export default {
	FirstLaunch: {screen: FirstLaunch},
	Registration: {screen: Registration},
	AddMail: {screen: AddMail},
	SignIn: {screen: SignIn},
	ForgotPassword: {screen: ForgotPassword},
};
