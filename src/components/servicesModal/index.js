// @flow

import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';

import Colors from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WidthDevice = Dimensions.get('window').width;

const ServicesleModal = (props) => {
    const { modalVisible, hideModal, servicesList, onPressPolicy, onPressOther } = props;
    return (
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
        >
            <View style={styles.modalWrapper}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        style={styles.modalCLose}
                        onPress={hideModal}
                    >
                        <Icon
                            name="close"
                            size={26}
                            color={Colors.lightGray} />
                    </TouchableOpacity>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalTitle}>Connect to Services</Text>
                        <View style={styles.servicesList}>
                            {
                                servicesList.map ((item, index) =>
                                    <ServicesItem
                                        key={index}
                                        imgUrl={item.imgUrl}
                                        onPress={item.onPress}
                                    />
                                )
                            }
                            <View style={[styles.wrapperBtn, styles.noBorder]}>
                                <TouchableOpacity
                                    onPress={onPressOther}
                                >
                                    <Text style={styles.textBtn}>
                                        Other
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.policyBtn}
                            onPress={onPressPolicy}
                        >
                            <Text style={styles.policyBtntext}>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const ServicesItem = (props) => {
    const { imgUrl, onPress  } = props;
    return (
        <View style={styles.wrapperBtn}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image
                    source={imgUrl}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        width: WidthDevice - 40,
        backgroundColor: Colors.white,
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
        color: Colors.gray,
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
        color: Colors.gray,
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
        color: Colors.blue,
    },
});

export default ServicesleModal;
