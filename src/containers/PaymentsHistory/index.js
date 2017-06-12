// @flow

import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import RouterHeader from '../../components/Inbox/RouterHeader';
import PaymentsHistoryItem from '../../components/PaymentsHistoryItem';

import styles from './styles';

export default class PaymentsHistory extends Component {
	render() {
		const { goBack } = this.props.navigation;
		const PaymentsList = [
			{
				title: "Business Letter for Meeting",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
			{
				title: "Business Letter for Meeting",
				time: "02:17PM",
				factPrice: "47",
				countWords: "75",
			},
		];
		return (
			<View style={styles.pageContainer}>
				<RouterHeader
					leftIconUrl={require('../../assets/img/arrow-left-icon.png')}
					titlePage={"Payments History"}
					onPressLeftIcon={() => goBack()}
					isShowRightIcon={false}
				/>
				<View style={styles.pageContent}>
					<ScrollView>
						<View style={styles.ordersList}>
							{
								PaymentsList.map((item, index) =>
									<PaymentsHistoryItem
										key={index}
										title={item.title}
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
