"use strict"

import Style from './../Style.js'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    LayoutAnimation,
    } = React;


var Checkbox = React.createClass({
    getInitialState: function () {
        var that = this;
        var state = {
            //chosen: this.props.initial,
            buttonStatuses: {}
        };

        var answersAmount = this.props.radio_props.length;
        for (var i = 0; i < answersAmount; i++) {
            state.buttonStatuses[i] = this.props.radio_props[i].selected;
        }

        return state;
    },
    getDefaultProps: function () {
        return {
            radio_props: [],
            initial: 0,
            buttonColor: '#2196f3',
            formHorizontal: false,
            labelHorizontal: true,
            animation: true,
            labelColor: '#000',
        };
    },

    _renderButton: function (obj, i) {
        var that = this;
        var is_active = this.state.buttonStatuses[i];//this.state.is_active_index == i;
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
    },

    render: function () {
        var render_content = false
        if (this.props.radio_props) {
            render_content = this.props.radio_props.map(this._renderButton)
        } else {
            render_content = this.props.children
        }
        return (
            <View style={[
                Style.radioFrom,
                this.props.style,
                this.props.formHorizontal && Style.formHorizontal,
              ]}>
                {render_content}
            </View>
        );
    },
});


var CheckboxButton = React.createClass({
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
    },
    getDefaultProps: function () {
        return {
            isSelected: false,
            buttonColor: '#2196f3',
            labelHorizontal: true,
        };
    },
    componentWillUpdate() {
        if (this.props.animation) {
            LayoutAnimation.spring();
        }
    },
    render: function () {
        var checkMark;
        if (this.props.isSelected) {
            checkMark = <Text style={{
          flex: 0.1,
          color: '#007AFF',
          fontWeight: 'bold',
          fontSize: 26,
          alignSelf: 'center'
        }}>✓</Text>;
        }
        return (
            <View style={[
                Style.radioWrap,
                this.props.style,
                !this.props.labelHorizontal && Style.labelVerticalWrap,
            ]}>
                <TouchableOpacity
                    style={[
                        Style.baseBorder,
                        Style.checkbox,
                        {borderColor:this.props.buttonColor}
                    ]}
                    onPress={() => {
                        this.props.onPress( this.props.obj.value, this.props.index)
                    }
                }>
                    {checkMark}
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={() => { this.props.onPress(this.props.obj.value, this.props.index)} }>
                    <View style={this.props.labelStyle}>
                        <Text style={[
                            Style.radioLabel,
                            !this.props.labelHorizontal && Style.labelVertical,
                            {color: this.props.labelColor},
                            this.props.labelStyle
                            ]}>{this.props.obj.label}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
});
export default Checkbox
export {CheckboxButton}

