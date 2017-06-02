// @flow

import { StyleSheet } from 'react-native';
import COLORS from '../../../../config/colors.config';


const styles = StyleSheet.create({
    balanceBlock: {
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 15,
    },
    balanceBlockTitle: {
        fontSize: 12,
        color: COLORS.gray,
        marginBottom: 5,
    },
    balanceBlockValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balanceCount: {
        fontSize: 40,
        color: COLORS.gray,
    },
    balanceBtnAdd: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: COLORS.blue,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
