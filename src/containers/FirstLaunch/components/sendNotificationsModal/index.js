// @flow

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';

import styles from './styles';

const SendNotificationsModal = (props: Object) => {
    const { modalVisible, hideModal, confirmModal } = props;
    return (
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modalWrapper}>
                <View style={styles.modalContent}>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalTitle}>
                            “Lingviny” Would Like to Send You Notifications
                        </Text>
                        <Text style={styles.modalText}>
                            Notifications may include alerts, sounds and icon badges. These can be configured in settings
                        </Text>
                    </View>
                    <View style={styles.btnBlock}>
                        <TouchableOpacity
                            style={[styles.btn, styles.borderRight]}
                            onPress={hideModal}
                        >
                            <Text style={styles.btnText}>
                                Don't Allow
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={confirmModal}
                        >
                            <Text style={styles.btnText}>
                                Allow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default SendNotificationsModal;
