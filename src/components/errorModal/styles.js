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
        alignItems: 'center',
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.gray,
        marginBottom: 10,
    },
    modalIconError: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalDescription: {
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.gray,
        marginBottom: 15,
    },
    button: {
        backgroundColor: COLORS.blue,
        height: 46,
        width: WidthDevice - 130,
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLORS.white,
        fontSize: 16,
    },
};

const exportStyles = StyleSheet.create(styles);

export default exportStyles;