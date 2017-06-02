// @flow

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ListView, TouchableWithoutFeedback } from 'react-native';

import MessegesBlockInfo from './components/messagesInfoBlock';
import SearchBlock from './components/searchBlock';
import RouterHeader from './components/routerHeader';
import InboxItem from './components/inboxItem';
import NewMessageBtn from './components/newMessageBtn';
import Swipeout from 'react-native-swipeout';
import rows from './data';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../config/colors.config';

export default class Inbox extends Component {
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

  _renderRow(rowData: Object, sectionID: number, rowID: number ) {
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
        />
      </Swipeout>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <RouterHeader titlePage={"Inbox"}/>
          <SearchBlock onPress={() => console.log("something search") }/>
        </View>
        <View style={styles.pageContent}>
          <View>
            <ScrollView>
              <MessegesBlockInfo onPress={() => console.log(" hide this block") }/>
              <View style={styles.inboxList}>
                <ListView
                  scrollEnabled
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                />
              </View>
            </ScrollView>
          </View>
          <NewMessageBtn onPress={() => console.log("create new message Item")}/>
        </View>
      </View>
    );
  }
}
