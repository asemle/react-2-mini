import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState ({
      allowEdit: newProps.allowEdit
    })
  }
  // componentWillReceiveProps

  render() {
    return (
      <select onChange={(e) => this.props.update(e.target.value)} disabled={this.state.allowEdit === "false"} className="dropDownContainer">
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}