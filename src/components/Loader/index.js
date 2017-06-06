// @flow

import React, {PureComponent} from 'react';
import {ActivityIndicator} from 'react-native';

import {observer, inject} from 'mobx-react';

import COLORS from './../../config/colors.config';

import styles from './styles.js';

@inject((allStores) => {
	return {
		app: allStores.app,
	};
})
@observer
export default class Loader extends PureComponent {

	render() {
		if (this.props.app && !this.props.app.showLoader) {
			return null;
		}

		return (
			<ActivityIndicator
				animating={true}
				style={styles.loader}
				size="large"
				color={COLORS.white}
			/>
		);
	}
}




