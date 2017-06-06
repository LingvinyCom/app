// @flow

import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../../config/colors.config';

type Props = {
    onPress: Function,
};

const SearchBlock = (props: Props) =>  {
	const { onPress } = props;
	return (
		<View style={styles.searchHeader}>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					placeholder={"Search"}
				/>
		</View>
			<TouchableOpacity
				style={styles.searchBtn}
				onPress={onPress}
			>
				<Icon
					name="search"
					size={24}
					color={COLORS.lightGray}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default SearchBlock;
