import BasicInput from "./BasicInput";
import { useContext } from 'react'
import { UserContext } from './Main'

function EducationField({handleDelete, id}) {
  const isInputEnabled = useContext(UserContext)

  return (
    <section className="EducationField">
      <button className="delete-field-btn" onClick={(e) => handleDelete(e, id)}>X</button>
      <h1 className="section-title">Education</h1>
      <div className="section-input">
        <div className="input-pt1">
          <BasicInput label="Institution" type="text" className="big-input" isInputEnabled={isInputEnabled}></BasicInput>
        </div>
        <div className="input-pt2">
          <BasicInput label="Title" type="text" className="medium-input" isInputEnabled={isInputEnabled}></BasicInput>
          <BasicInput label="Year of Conclusion" type="number" className="small-input" isInputEnabled={isInputEnabled}></BasicInput>
        </div>
      </div>
    </section>
  )
}

export default EducationField
