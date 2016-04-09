/**
 * Created by gelo on 09/04/2016.
 */

var React = require('react-native');
var {
    View,
    } = React;
import Style from './../Style.js'
import BaseButton from './../BaseButton'

class RadioButton extends BaseButton {

    _getStyle() {
        var dad = super._getStyle();
        dad.push(Style.radio);
        return dad;
        //return [
        //    Style.baseBorder,
        //    Style.radio,
        //    {borderColor:this.props.buttonColor},
        //]
    }

    _renderInterior() {
        return (<View style={[
            this.props.isSelected && Style.radioActive,
            this.props.isSelected && {backgroundColor:this.props.buttonColor},
          ]}></View>);
    }
}
export default RadioButton;
