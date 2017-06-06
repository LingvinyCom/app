// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../../config/colors.config';
import styles from './styles';

const ErrorModal = (props: Object) => {
  const {modalVisible, hideModal, titleError, descriptionError, textBtn, typeModal} = props;
  const renderIconModal = () => {
    let IconCustom = {
      name: typeModal === 'warning' ? "warning" : "error",
      size: 50,
      color: typeModal === 'warning' ? COLORS.lightOrange : COLORS.red,
      color: COLORS.red,
    };
    return <Icon {...IconCustom}/>;
  };
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        alert("Modal has been closed.");
      }}
      typeModal={typeModal}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <View
            style={styles.modalIconError}
            onPress={hideModal}
          >
            { renderIconModal() }
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalTitle}>
              { titleError }
            </Text>
            <Text style={styles.modalDescription}>
              { descriptionError }
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={hideModal}
            >
              <Text
                style={styles.text}
              >
                {textBtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
