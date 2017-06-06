import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import { SwitchPlugin } from './SwitchPlugin';

import styles from './styles';


// type Props = {
//     switchValue: boolean,
//     onPress: Function
// };

const Switch = (props: Object) => (
	<View style={styles.switchBlock}>
		<Text style={styles.switchLabel}>{props.label}</Text>
		<View style={styles.switchWrapper}>
			<SwitchPlugin
				value={props.switchValue}
				onValueChange={props.onPress}
				disabled={false}
				activeText={'on'}
				inActiveText={'off'}
    />
		</View>
	</View>
);

export default Switch;
