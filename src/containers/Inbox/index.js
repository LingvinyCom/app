// @flow

import React, {Component} from 'react';
import {View, ScrollView, ListView, Image} from 'react-native';

import MessegesBlockInfo from './components/MessagesInfoBlock';
import SearchBlock from '../../components/Inbox/searchBlock';
import RouterHeader from '../../components/Inbox/routerHeader';
import InboxItem from '../../components/Inbox/inboxItem';
import NewMessageBtn from '../../components/Inbox/newMessageBtn';
import Swipeout from 'react-native-swipeout';
import rows from './data';
import EmptyInbox from '../../components/Inbox/emptyInbox';
import MainDropdownMenu from './components/MainDropdownMenu';
import MoveToDropdown from './components/MoveToDropdown';

import styles from './styles';

export default class Inbox extends Component {
	state: {
		dataSource: Object,
	}

	constructor(props: {}) {
		super(props);
		let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
		this.state = {
			dataSource: ds.cloneWithRows(rows),
			isMainDropdownVisible: false,
			isMoveToDropdownVisible: false,
			isVisibleMessageInfoBlock: true,
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
		drawerLabel: 'Inbox',
		drawerIcon: () => (
			<Image
				source={require('../../assets/img/inbox-item.png')}
			/>
		),
	};
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<RouterHeader
						onPressLeftIcon={ () => this.props.navigation.navigate('DrawerOpen')}
						onPressRightIcon={ () => this.setState({ isMainDropdownVisible: !this.state.isMainDropdownVisible }) }
						titlePage={"Inbox"}
						leftIconUrl={require('../../assets/img/menu-icon.png')}
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
									{
										this.state.isVisibleMessageInfoBlock &&
										<MessegesBlockInfo
											onPress={() => this.setState({ isVisibleMessageInfoBlock: false }) }
										/>
									}
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
				<MainDropdownMenu
					isMainDropdownVisible={this.state.isMainDropdownVisible}
					showDropDownMoveTo={ () => this.setState({ isMoveToDropdownVisible: true })}
				/>
				<MoveToDropdown
					isMoveToDropdownVisible={this.state.isMoveToDropdownVisible}
					backToMainDropdown={ () => this.setState({ isMoveToDropdownVisible: false, isMainDropdownVisible: true }) }
				/>
			</View>
		);
	}
}
