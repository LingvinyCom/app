// @flow

import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {inject} from 'mobx-react';

import RouterHeader from '../../components/Inbox/RouterHeader';
import RoundedButton from '../../components/Buttons/Rounded';

import * as Selects from '../../components/Selects/';

import COLORS from '../../config/colors.config';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

@inject((allStores) => ({
	auth: allStores.auth,
}))
export default class Signature extends Component {
	state: {
		text: string,
		switchValue: boolean,
	}
	constructor(props: Object) {
		super(props);
		this.state = ({
			text: '',
			switchValue: true,
		});
	}
	render() {
		const { goBack } = this.props.navigation;
		const activeLanguageList = [ "Arabic", "Russian", "Spanish" ];
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					titlePage={"Signature"}
					onPressLeftIcon={() => goBack()}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<ScrollView>
						<Text style={styles.pageTitle}>
							Appended at the end of all outgoing messages
						</Text>
						<View style={styles.textareaWrapper}>
							<View style={styles.inputWrapper}>
								<TextInput
									style={styles.input}
									placeholder={"Type here"}
									multiline = {true}
									numberOfLines = {4}
									onChangeText={(text) => this.setState({text})}
									value={this.state.text}
									placeholderTextColor={COLORS.lightGray}
									underlineColorAndroid={'transparent'}
								/>
							</View>
							<View style={styles.btnBlockControls}>
								<TouchableOpacity style={styles.btnControl}>
									<Icon size={26} name="attach-file" color={COLORS.gray} />
								</TouchableOpacity>
								<TouchableOpacity style={styles.btnControl}>
									<Icon size={26} name="panorama" color={COLORS.gray} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.autoTranslateWrapper}>
							<Text style={styles.autoTranslateLabel}>AUTO TRANSLATE</Text>
							<View>
								<Selects.Switch
									switchValue={this.state.switchValue}
									onPress={(switchValue: boolean) => this.props.auth.setValue({'useSsl': switchValue})}
								/>
							</View>
						</View>
						<View style={styles.languagesWrapper}>
							<Text style={styles.languagesTitle}>Languages You have Already Paid for</Text>
						</View>
						<View style={styles.languagesList}>
							{
								!activeLanguageList.length &&
								<Text style={styles.languagesNotification}>No Language yet</Text>
							}
							{
								activeLanguageList.map((item, index) =>
								<View
									key={index}
								  style={styles.languageWrapper}
								>
									<Text style={styles.languageName}>{item}</Text>
								</View>
								)
							}
						</View>
						<View style={styles.wrapperBtn}>
							<RoundedButton
								text={"Save"}
								onPress={ () => console.log("save this data")}
							/>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
