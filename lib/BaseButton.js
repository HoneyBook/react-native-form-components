import Style from './Style.js'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    LayoutAnimation,
    } = React;

class BaseButton extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    defaultProps = {
        isSelected: false,
        buttonColor: '#2196f3',
        labelHorizontal: true,
    }

    componentWillUpdate() {
        if (this.props.animation) {
            LayoutAnimation.spring();
        }
    }

    _renderInterior() {

    }

    _getStyle() {
        return [
            Style.baseBorder,
            {borderColor: this.props.buttonColor},
        ]
    }

    render() {
        return (
            <View style={[
                Style.radioWrap,
                this.props.style,
                !this.props.labelHorizontal && Style.labelVerticalWrap,
              ]}>
                <TouchableOpacity
                    style={this._getStyle()}
                    onPress={() => {
                    this.props.onPress( this.props.obj.value, this.props.index)
                    }
                }>
                    {this._renderInterior()}

                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.onPress(value, this.props.index)}
                    }>
                    <View style={this.props.labelStyle}>
                        <Text style={[
                            Style.radioLabel,
                            !this.props.labelHorizontal && Style.labelVertical,
                            {color: this.props.labelColor},
                            this.props.labelStyle
                            ]}>{this.props.obj.label}</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

export default BaseButton;
