import { Component } from "react";

class BasicInput extends Component {
  constructor() {
    super()
  }

  render() {
    const { label, type, className } = this.props

    return (
      <div className={"BasicInput " + className}>
        <label htmlFor="name-input">{label}</label>
        <input type={type} name="name-input" id="name-value"/>
      </div>
    )
  }

}

export default BasicInput