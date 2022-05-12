import { Component } from "react";
import '../styles/Main.css'
import EducationField from "./EducationField";
import GeneralField from "./GeneralField";
import WorkField from "./WorkField";

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main className="Main">
        <form action="">
          <GeneralField></GeneralField>
          <EducationField></EducationField>
          <WorkField></WorkField>
        </form>
        <button id="submit-btn">Submit</button>
      </main>
    )
  }

}

export default Main