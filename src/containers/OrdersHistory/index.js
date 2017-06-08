// @flow

import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';
import OrdersHistoryItem from '../../components/OrdersHistortItem';

import styles from './styles';

export default class OrdersHistory extends Component {
	render() {
		const OrdersList = [
			{
				title: "Business Letter for Meeting",
				status: "TRANSLATING",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				status: "TRANSLATING",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				status: "TRANSLATED",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				status: "TRANSLATED",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				status: "TRANSLATED",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
		];
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					titlePage={"Orders History"}
					onPressLeftIcon={ () => console.log("navigate to Account Settings") }
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<ScrollView>
						<View style={styles.ordersList}>
							{
								OrdersList.map((item, index) =>
								<OrdersHistoryItem
									key={index}
								  title={item.title}
								  status={item.status}
									time={item.time}
									factPrice={item.factPrice}
									countWords={item.countWords}
								/>
								)
							}
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
