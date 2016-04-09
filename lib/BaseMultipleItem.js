"use strict"

import Style from './Style.js'

var React = require('react-native');
var {
    View,
    } = React;


class BaseMultipleItem extends React.Component {

    defaultProps= {
            radio_props: [],
            initial: 0,
            buttonColor: '#2196f3',
            formHorizontal: false,
            labelHorizontal: true,
            animation: true,
            labelColor: '#000',
    }

    render() {
        var render_content = false
        if (this.props.radio_props) {
            render_content = this.props.radio_props.map(this._renderButton.bind(this))
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
    }
}


export default BaseMultipleItem
