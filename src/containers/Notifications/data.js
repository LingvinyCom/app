// @flow

import React from 'react';

import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

let btnSwipeRight = [
	{
		text: <Icon name="archive" size={26} color={COLORS.gray}/>,
		type: 'delete',
		backgroundColor: COLORS.lightGray2,
	},
	{
		text: <Icon name="delete" size={26} color={COLORS.white}/>,
		type: 'delete',
		color: COLORS.red,
		backgroundColor: COLORS.red,
	},
];

let rows = [
	{
		right: btnSwipeRight,
		title: "Gregory Carr",
		theme: "Business Letter for Meeting",
		description: "has been Translated and sent to:",
		time: "00:57 PM",
	},
	{
		right: btnSwipeRight,
		title: "Josie Miller",
		theme: "Business Letter for Meeting",
		description: "has been Translated and sent to:",
		time: "Apr 28",
	},
	{
		right: btnSwipeRight,
		title: "Michael Long",
		theme: "Business Letter for Meeting",
		description: "has been Translated and sent to:",
		time: "Apr 5",
	},
	{
		right: btnSwipeRight,
		title: "Michael Long",
		theme: "Business Letter for Meeting",
		description: "has been Translated and sent to:",
		time: "Apr 5",
	},
	{
		right: btnSwipeRight,
		title: "Lena Warner",
		theme: "Business Letter for Meeting",
		description: "has been Translated and sent to:",
		time: "Mar 23",
	},
];

export default rows;
