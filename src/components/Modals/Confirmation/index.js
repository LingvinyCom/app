// @flow

import React from 'react';
import { View, Modal, TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles';

export default (props: Object) => (
	<Modal
		animationType={"fade"}
		transparent={true}
		visible={props.show}
	>
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.imgWrapper}>
					<Image source={require('../../../assets/img/exit-logo.png')}/>
				</View>
				<Text style={styles.title}>Are you sure?</Text>
				<View style={styles.rowBtn}>
					<TouchableOpacity
						style={[styles.btn, styles.btnBlue]}
						onPress={props.onAccept}
					>
						<Text style={[styles.btnText, styles.btnTextWhite]}>Yes</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btn}
						onPress={props.onDecline}
					>
						<Text style={styles.btnText}>No</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	</Modal>
);