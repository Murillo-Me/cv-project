import { Component } from "react";
import BasicInput from "./BasicInput";

class EducationField extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="EducationField">
        <h1 className="section-title">Education</h1>
        <div className="section-input">
          <div className="input-pt1">
            <BasicInput label="Institution" type="text" className="big-input"></BasicInput>
          </div>
          <div className="input-pt2">
            <BasicInput label="Title" type="text" className="medium-input"></BasicInput>
            <BasicInput label="Year of Conclusion" type="number" className="small-input"></BasicInput>
          </div>
        </div>
      </section>
    )
  }

}

export default EducationField