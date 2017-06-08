// @flow

import React, { Component } from 'react';
import { ScrollView, View, ListView } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';
import AutoTranslationItem from '../../components/AutoTranslationItem';

import Swipeout from 'react-native-swipeout';
import rows from './data';

import styles from './styles';

export default class AutoTranslation extends Component {
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
				<AutoTranslationItem
					title={rowData.title}
					email={rowData.email}
				/>
			</Swipeout>
		);
	}
	render() {
		const { goBack } = this.props.navigation;
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					titlePage={"Auto Translation"}
					onPressLeftIcon={() => goBack()}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<ScrollView>
						<View style={styles.translationsList}>
							<ListView
								scrollEnabled
								dataSource={this.state.dataSource}
								renderRow={this._renderRow.bind(this)}
							/>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
