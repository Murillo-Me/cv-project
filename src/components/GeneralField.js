import { Component } from "react";
import BasicInput from "./BasicInput";

class GeneralField extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="GeneralField">
        <BasicInput label="Name" type="text"></BasicInput>
        <BasicInput label="Phone" type="tel"></BasicInput>
        <BasicInput label="e-mail" type="email"></BasicInput>
      </section>
    )
  }

}

export default GeneralField