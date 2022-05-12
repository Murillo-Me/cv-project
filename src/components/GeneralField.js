import { Component } from "react";
import BasicInput from "./BasicInput";

class GeneralField extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="GeneralField">
        <BasicInput label="Name" type="text" className="medium-input"></BasicInput>
        <BasicInput label="Phone" type="tel" className="extra-small-input"></BasicInput>
        <BasicInput label="e-mail" type="email" className="big-input"></BasicInput>
      </section>
    )
  }

}

export default GeneralField