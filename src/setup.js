// @flow


/* REACT */
import React, { Component } from 'react';

/* MODULES */
import { Provider } from 'mobx-react';

/* CUSTOM MODULES */
import store from './store';
import App from './app';


export default class Setup extends Component {
	render() {
		return (
			<Provider {...store}>
				<App/>
			</Provider>
		);
	}
}
