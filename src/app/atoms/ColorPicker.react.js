import ColorPicker from 'react-color';
import React, {Component, PropTypes as RPT} from 'react';

export default class ColorPicker extends Component {

  static propTypes = {
    color: RPT.string,
    onChangeComplete: RPT.func.isRequired,
    visible: RPT.bool.isRequired
  }

  render() {
    const {onChangeComplete} = this.props

    return (
      <ColorPicker
        color={this.props.color}
        onChangeComplete={onChangeComplete}
      />
    )
  }
}
