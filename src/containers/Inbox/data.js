// @flow

import React from 'react';

import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

let btnSwipeRight = [
	{
		text: <Icon name="archive" size={26} color={COLORS.gray}/>,
		type: 'delete',
		color: COLORS.gray,
		backgroundColor: COLORS.blackWhite,
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
		status: "T",
		theme: "Business Letter for Meeting",
		description: "Tips For Designing An Effective",
		time: "00:57 PM",
	},
	{
		right: btnSwipeRight,
		title: "Josie Miller",
		status: "CR",
		theme: "Business Letter for Meeting",
		description: "Tips For Designing An Effective",
		time: "Apr 28",
	},
	{
		right: btnSwipeRight,
		title: "Michael Long",
		theme: "Business Letter for Meeting",
		description: "Effective Advertising Pointers",
		time: "Apr 5",
	},
	{
		right: btnSwipeRight,
		title: "Michael Long",
		theme: "Business Letter for Meeting",
		description: "Effective Advertising Pointers",
		time: "Apr 5",
	},
	{
		right: btnSwipeRight,
		title: "Lena Warner",
		theme: "Business Letter for Meeting",
		description: "What Makes Flyers Unrivaled",
		time: "Mar 23",
	},
];

export default rows;
