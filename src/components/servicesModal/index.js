// @flow

import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Modal,
} from 'react-native';

import ServicesItem from './components/ServicesItem/';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../config/colors.config';
import styles from './styles';

const ServicesleModal = (props: Object) => {
	const { modalVisible, hideModal, servicesList, onPressPolicy, onPressOther } = props;
	return (
		<Modal
			animationType={"fade"}
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {alert("Modal has been closed.");}}
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
							color={Colors.lightGray}
						/>
					</TouchableOpacity>
					<View style={styles.modalBody}>
						<Text style={styles.modalTitle}>Connect to Services</Text>
						<View style={styles.servicesList}>
							{
								servicesList.map((item, index) =>
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

export default ServicesleModal;
