import FirstLaunch from './../containers/FirstLaunch/';
import Registration from './../containers/auth/Registration/';
import AddMail from './../containers/auth/AddMail/';
import SignIn from './../containers/auth/SignIn/';
import ForgotPassword from './../containers/auth/ForgotPassword/';
import Congratulations from './../containers/auth/Congratulations';
import Sidebar from './../containers/Sidebar';
import Inbox from './../containers/Inbox';
import ChangePassword from './../containers/ChangePassword';
import OrdersHistory from './../containers/OrdersHistory';
import PaymentsHistory from './../containers/PaymentsHistory';

/**
 *  @TODO: Place navigationOptions header:null global.
 */
export default {
	FirstLaunch: {screen: FirstLaunch},
	Registration: {screen: Registration},
	AddMail: {screen: AddMail},
	SignIn: {screen: SignIn},
	ForgotPassword: {screen: ForgotPassword},
	Sidebar: {screen: Sidebar},
	ChangePassword: {screen: ChangePassword},
	OrdersHistory: {screen: OrdersHistory},
	PaymentsHistory: {screen: PaymentsHistory},
};
