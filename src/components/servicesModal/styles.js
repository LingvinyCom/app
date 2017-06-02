// @flow

import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../config/colors.config';

const WidthDevice = Dimensions.get('window').width;
/**
 *  @TODO: Add _t_styles.
 */
const styles = {
	modalWrapper: {
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        width: WidthDevice - 40,
        backgroundColor: COLORS.white,
        borderRadius: 3,
        padding: 30,
    },
    modalCLose: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 19,
        color: COLORS.gray,
        marginBottom: 15,
    },
    wrapperBtn: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#EAEDF1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noBorder: {
        borderBottomWidth: 0,
    },
    textBtn: {
        fontSize: 16,
        color: COLORS.gray,
    },
    servicesList: {
        marginBottom: 40,
    },
    policyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    policyBtntext: {
        fontSize: 12,
        color: COLORS.blue,
    },
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;