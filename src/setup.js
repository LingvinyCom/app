// @flow


import React, { Component } from 'react';

import { Provider } from 'mobx-react';

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
