// @flow

import { Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.6)',
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
        borderColor: '#EAEDF1',
        marginVertical: 5,
    },
});

export default styles;
