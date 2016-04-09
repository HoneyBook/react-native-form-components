"use strict"

import Style from './../Style.js'

import BaseMultipleItem from './../BaseMultipleItem'
import CheckboxButton from './CheckboxButton'
var React = require('react-native');

class CheckboxGroup extends BaseMultipleItem {
    constructor(props) {
        super(props);
        var state = {
            //chosen: this.props.initial,
            buttonStatuses: {}
        };

        var answersAmount = this.props.radio_props.length;
        for (var i = 0; i < answersAmount; i++) {
            state.buttonStatuses[i] = this.props.radio_props[i].selected;
        }

        this.state = state;

    }

    _renderButton(obj, i) {
        var that = this;
        var is_active = this.state.buttonStatuses[i];
        return (
            <CheckboxButton
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
                    var val = !this.state.buttonStatuses[index];
                    var vals = this.state.buttonStatuses;
                    vals[index] = val;
                    that.setState({buttonStatuses: vals});
                }}
            />
        );
    }
}

export default CheckboxGroup
