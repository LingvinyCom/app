// @flow


import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	routerContainer: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 25 : 0,
	},
});

export default styles;
