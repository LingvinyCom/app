// @flow

import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: COLORS.modalBackground,
	},
	sidebarWrapper: {
		width: WidthDevice - 60,
		backgroundColor: COLORS.white,
		flex: 1,
	},
	menuList: {
		paddingHorizontal: 30,
	},
	middleListMenu: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: COLORS.blackWhite,
		marginVertical: 5,
	},
});

export default styles;
