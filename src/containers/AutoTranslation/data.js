// @flow

import React from 'react';

import COLORS from '../../config/colors.config';
import Icon from 'react-native-vector-icons/MaterialIcons';

let btnSwipeRight = [
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
		title: "Terry Martin",
		email: "timothy.nolan@yahoo.com",
	},
	{
		right: btnSwipeRight,
		title: "Terry Martin",
		email: "timothy.nolan@yahoo.com",
	},
	{
		right: btnSwipeRight,
		title: "Terry Martin",
		email: "timothy.nolan@yahoo.com",
	},
	{
		right: btnSwipeRight,
		title: "Terry Martin",
		email: "timothy.nolan@yahoo.com",
	},
	{
		right: btnSwipeRight,
		title: "Terry Martin",
		email: "timothy.nolan@yahoo.com",
	},
];

export default rows;
