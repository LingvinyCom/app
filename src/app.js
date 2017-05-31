// @flow


/* REACT */
import React, { Component } from 'react';
import { AppState, View, Text } from 'react-native';

/* MODULES */
import { inject, observer } from 'mobx-react';
import moment from 'moment';

/* CUSTOM MODULES */
import Router from './navigation';

/* STYLES */


/* TYPES */

export default class App extends Component {
	// constructor(props: Object): void {
	// 	super(props);
	// }

	// static defaultProps = {
	// 	// MobX props need to be defined as default props and as props
	// 	store: {},
	// };

	// props: {
	// 	store: {},
	// };

	render () {
		return (
			<View style={{flex:1}}>
				<Router />
			</View>
		);
	}
}
