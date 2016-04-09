var React = require('react-native');
var {
    Text,
    } = React;
import Style from './../Style.js'
import BaseButton from './../BaseButton'

class CheckboxButton extends BaseButton {

    //_getStyle() {
    //    return [
    //        Style.baseBorder,
    //        {borderColor:this.props.buttonColor},
    //    ]
    //}

    _renderInterior() {
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
        return checkMark;
    }

}

export default CheckboxButton

