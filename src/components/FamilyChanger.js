import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      allowEdit: newProps.allowEdit
    })
  }
  // componentWillReceiveProps

  render() {
    return (
      <select onChange={(e) => this.props.update(e.target.value)} disabled={this.state.allowEdit === "false"} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}