// @flow

import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Modal,
	Image,
} from 'react-native';

import styles from './styles';

const NotifyModal = (props: Object) => {
	const { show, hideModal, title, description, btnLabel, type } = props;
	const images = {
		warning: require('../../../assets/img/warning-icon.png'),
		error: require('../../../assets/img/error-icon.png'),
		information: require('../../../assets/img/information-ico.png'),
	};

	return (
		<Modal
			animationType={"fade"}
			transparent={true}
			visible={show}
			onRequestClose={() => console.log("Modal has been closed.")}
		>
			<TouchableWithoutFeedback onPress={hideModal}>
				<View style={styles.modalWrapper}>
					<View style={styles.modalContent}>
						<View
							style={styles.modalIconError}
							onPress={hideModal}
						>
							<Image source={images[type]}/>
						</View>
						<View style={styles.modalBody}>
							<Text style={styles.modalTitle}>{ title }</Text>
							<Text style={styles.modalDescription}>{ description }</Text>
							<TouchableOpacity
								style={styles.button}
								onPress={hideModal}
							>
								<Text style={styles.text}>{ btnLabel }</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default NotifyModal;
