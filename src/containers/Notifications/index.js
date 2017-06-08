// @flow

import React, {Component} from 'react';
import {View, ScrollView, ListView, Image} from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';
import NotificatiobItem from './components/NotificationItem';
import Swipeout from 'react-native-swipeout';
import rows from './data';

import styles from './styles';
import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Notifications extends Component {
	state: {
		dataSource: Object,
	}

	constructor(props: {}) {
		super(props);
		let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
		this.state = {
			dataSource: ds.cloneWithRows(rows),
		};
	}

	_renderRow(rowData: Object, sectionID: number, rowID: number) {
		return (
			<Swipeout
				left={rowData.left}
				right={rowData.right}
				rowID={rowID}
				sectionID={sectionID}
				autoClose={true}
				close={true}
				onOpen={(sectionID, rowID) => console.log('---open: sectionID:' + sectionID + 'rowid:' + rowID) }
				onClose={() => console.log('===close') }
				scroll={event => console.log('scroll event') }
				style={styles.swipeoutList}
			>
				<NotificatiobItem
					onPress={ () => console.log('press children') }
					title={rowData.title}
					theme={rowData.theme}
					description={rowData.description}
					time={rowData.time}
				/>
			</Swipeout>
		);
	}
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: () => (
			<Image source={require('../../assets/img/bell-icon.png')} />
		),
	};
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<RouterHeader
						onPressLeftIcon={ () => this.props.navigation.navigate('Inbox')}
						onPressRightIcon={ () => this.props.navigation.navigate('Notifications') }
						titlePage={"Notifications"}
						leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
						isShowRightIcon={false}
					/>
				</View>
				<View style={styles.pageContent}>
					<View>
						<ScrollView>
							{
								!this.state.dataSource &&
								<EmptyInbox /> ||
								<View>
									<View style={styles.inboxList}>
										<ListView
											scrollEnabled
											dataSource={this.state.dataSource}
											renderRow={this._renderRow.bind(this)}
										/>
									</View>
								</View>
							}
						</ScrollView>
					</View>
				</View>
			</View>
		);
	}
}
