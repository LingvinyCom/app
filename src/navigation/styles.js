// @flow


import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	routerContainer: {
		flex: 1,
    paddingTop: Platform.OS === 'ios' ? 25 : null,
	},
});

export default styles;
