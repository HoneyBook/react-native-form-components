"use strict"

import BaseMultipleItem from './../BaseMultipleItem'
import RadioButton from './RadioButton'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    LayoutAnimation,
    } = React;


class RadioGroup extends BaseMultipleItem {


    constructor(props) {
        super(props);
        this.state = {
            is_active_index: this.props.initial,
        };

    }

    _renderButton(obj, i) {
        var that = this;
        var is_active = this.state.is_active_index == i;
        return (
            <RadioButton
                isSelected={is_active}
                obj={obj}
                key={i}
                index={i}
                buttonColor={this.props.buttonColor}
                labelHorizontal={this.props.labelHorizontal}
                labelColor={this.props.labelColor}
                style={this.props.radioStyle}
                animation={this.props.animation}
                onPress={(value, index) => {
                    that.props.onPress(value, index);
                    that.setState({is_active_index: index});
                }}
            />
        );
    }

}

export default RadioGroup
