// @flow

import React, {Component} from 'react';
import {View, ScrollView, ListView, Image} from 'react-native';

import SearchBlock from '../../components/Inbox/SearchBlock/';
import RouterHeader from '../../components/Inbox/RouterHeader/';
import InboxItem from '../../components/Inbox/InboxItem/';
import NewMessageBtn from '../../components/Inbox/NewMessageBtn/';
import Swipeout from 'react-native-swipeout';
import rows from './data';

import styles from './styles';
import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Sent extends Component {
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
				<InboxItem
					onPress={ () => console.log('press children') }
					title={rowData.title}
					status={rowData.status}
					theme={rowData.theme}
					description={rowData.description}
					time={rowData.time}
					itemStatus={rowData.itemStatus}
				/>
			</Swipeout>
		);
	}
	static navigationOptions = {
		drawerLabel: 'Sent',
		drawerIcon: () => (
			<Image source={require('../../assets/img/sent-icon.png')} />
		),
	};
	render() {
		// return null;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<RouterHeader
						onPressLeftIcon={ () => this.props.navigation.navigate('DrawerOpen')}
						onPressRightIcon={ () => this.props.navigation.navigate('Notifications') }
						titlePage={"Sent"}
						leftIconUrl={require('../../assets/img/menu-icon.png')}
						rightIconUrl={require('../../assets/img/bell-icon.png')}
						isShowRightIcon={true}
					/>
					<SearchBlock onPressSearch={() => console.log("something search") }/>
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
					<NewMessageBtn onPress={() => console.log("create new message Item")}/>
				</View>
			</View>
		);
	}
}
