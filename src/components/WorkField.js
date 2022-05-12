import { Component } from "react";
import BasicInput from "./BasicInput";

class WorkField extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="WorkField">
        <h1 className="section-title">Work</h1>
        <div className="section-input">
          <div className="input-pt1">
            <BasicInput label="Company" type="text" className="big-input"></BasicInput>
          </div>
          <div className="input-pt2">
            <BasicInput label="Job Title" type="text" className="big-input"></BasicInput>
            <BasicInput label="Start Date" type="month" className="extra-small-input"></BasicInput>
            <BasicInput label="End Date" type="month" className="extra-small-input"></BasicInput>
          </div>
        </div>
      </section>
    )
  }

}

export default WorkField