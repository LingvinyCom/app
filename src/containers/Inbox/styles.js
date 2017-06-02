// @flow

import { StyleSheet } from 'react-native';

import COLORS from '../../config/colors.config';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F6F8',
    },
    pageContent: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inboxList: {
        marginBottom: 20,
    },
    swipeoutList: {
        backgroundColor: COLORS.white,
        marginBottom: 15,
    },
});

export default styles;
