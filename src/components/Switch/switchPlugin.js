// @flow

import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

import Colors from '../../config/colors.config';

type Props = {
    test: string,
    value: boolean,
    transformSwitch: string,
    backgroundColor: string,
    circleColor: string,
    onValueChange: Function,
    disabled: boolean,
    activeText: string,
    inActiveText: string,
    backgroundActive: string,
    backgroundInactive: string,
    value: boolean,
    circleActiveColor: string,
    circleInActiveColor: string,
};
type  ContextProps = {
    test: string,
    value: boolean,
};

export class Switch extends Component {
    static defaultProps = {
        value: false,
        onValueChange: () => null,
        disabled: false,
        activeText: 'On',
        inActiveText: 'Off',
        backgroundActive: Colors.green,
        backgroundInactive: Colors.lightGray,
        circleActiveColor: Colors.white,
        circleInActiveColor: Colors.white,
    };
    handleSwitch: Function;
    animateSwitch: Function;
    state: {
        value: boolean,
        transformSwitch: string,
        backgroundColor: Object,
        circleColor: Object,
    };
    constructor(props: Props, context: ContextProps) {
        super(props, context);
        this.state = {
            value: props.value,
            transformSwitch: new Animated.Value(props.value ? 13 : -13),
            backgroundColor: new Animated.Value(props.value ? 75 : -75),
            circleColor: new Animated.Value(props.value ? 75 : -75),
        };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.animateSwitch = this.animateSwitch.bind(this);
    }
    componentWillReceiveProps(nextProps: Props) {
        const { disabled } = this.props;
        if (nextProps.value === this.props.value  || disabled) {
            return;
        }
        this.animateSwitch(nextProps.value, () => {
            this.setState({ value: nextProps.value });
        });
    }
    handleSwitch() {
        const { value } = this.state;
        const { onValueChange, disabled } = this.props;
        if (disabled) {
            return;
        }
        this.animateSwitch(!value, () => {
            this.setState({ value: !value }, () => onValueChange(this.state.value));
        });
    }
    animateSwitch(value: boolean, cb: Function = () => {}) {
        Animated.parallel([
            Animated.spring(this.state.transformSwitch, {
                toValue: value ? 13 : -13,
                duration: 200,
            }),
            Animated.timing(this.state.backgroundColor, {
                toValue: value ? 75 : -75,
                duration: 200,
            }),
            Animated.timing(this.state.circleColor, {
                toValue: value ? 75 : -75,
                duration: 200,
            }),
        ]).start(cb);
    }
    render() {
        const {
            transformSwitch,
            backgroundColor,
            circleColor,
        } = this.state;
        const {
            backgroundActive,
            backgroundInactive,
            circleActiveColor,
            circleInActiveColor,
            activeText,
            inActiveText,
            containerStyle,
            activeTextStyle,
            inactiveTextStyle,
        } = this.props;
        const interpolatedColorAnimation = backgroundColor.interpolate({
            inputRange: [-75, 75],
            outputRange: [backgroundInactive, backgroundActive],
        });
        const interpolatedCircleColor = circleColor.interpolate({
            inputRange: [-75, 75],
            outputRange: [circleInActiveColor, circleActiveColor],
        });
        return (
            <TouchableWithoutFeedback
                onPress={this.handleSwitch}
            >
                <Animated.View
                    style={[
                        styles.container,
                        containerStyle,
                        { backgroundColor: interpolatedColorAnimation },
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.animatedContainer,
                            { transform: [{ translateX: transformSwitch }]},
                        ]}
                    >
                        <Text style={[styles.text, styles.inactiveText, styles.paddingRight, activeTextStyle]}>
                            {activeText}
                        </Text>
                        <Animated.View style={[styles.circle, { backgroundColor: interpolatedCircleColor }]} />
                        <Text style={[styles.text, styles.active, styles.paddingLeft, inactiveTextStyle]}>
                            {inActiveText}
                        </Text>
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.black,
    },
    animatedContainer: {
        flex: 1,
        width: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    text: {
        color: 'transparent',
        backgroundColor: 'transparent',
    },
    paddingRight: {
        paddingRight: 1,
    },
    paddingLeft: {
        paddingLeft: 1,
    },
});
