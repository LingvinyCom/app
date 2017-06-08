// @flow

import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Modal,
} from 'react-native';

import ServicesItem from './components/ServicesItem/';
import Icon from 'react-native-vector-icons/MaterialIcons';

import APP_CONFIG from '../../../config/app.config';
import COLORS from '../../../config/colors.config';
import styles from './styles';

const ServicesModal = (props: Object) => {
	const { modalVisible, hideModal, servicesList, onPressItem, onPressPolicy, onPressOther } = props;

	return (
		<Modal
			animationType={"fade"}
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => console.log("Modal has been closed.")}
		>
			<TouchableWithoutFeedback onPress={ hideModal }>
				<View style={styles.modalWrapper}>
				<View style={styles.modalContent}>
					<TouchableOpacity
						style={styles.modalCLose}
						onPress={hideModal}
					>
						<Icon
							name="close"
							size={26}
							color={COLORS.lightGray}
						/>
					</TouchableOpacity>
					<View style={styles.modalBody}>
						<Text style={styles.modalTitle}>Connect to Services</Text>
						<View style={styles.servicesList}>
							{
								servicesList.map((item, index) =>
									<ServicesItem
										key={index}
										image={APP_CONFIG.EMAIL_ENGINE_IMAGES[item.title]}
										onPress={() => onPressItem(item)}
									/>
								)
							}
							<View style={[styles.wrapperBtn, styles.noBorder]}>
								<TouchableOpacity onPress={onPressOther}>
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
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default ServicesModal;
