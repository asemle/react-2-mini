import React, { Component } from 'react';

export default class SizeChanger extends Component {
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


  render() {
    return (
      <select onChange={(e) => this.props.update(parseInt(e.target.value, 10))} disabled={this.state.allowEdit === "false"} className="dropDownContainer">
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select> 
    )
  }
}