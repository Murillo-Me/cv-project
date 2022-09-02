import BasicInput from "./BasicInput";
import { UserContext } from './Main'
import { useContext } from 'react'

function WorkField({handleDelete, id, show}) {
  const isInputEnabled = useContext(UserContext)

  return (
    <section className="WorkField">
      <button className="delete-field-btn" onClick={(e) => handleDelete(e, id)}>X</button>
      <h1 className="section-title">Work</h1>
      <div className="section-input">
        <div className="input-pt1">
          <BasicInput label="Company" type="text" className="big-input" isInputEnabled={isInputEnabled}></BasicInput>
        </div>
        <div className="input-pt2">
          <BasicInput label="Job Title" type="text" className="big-input" isInputEnabled={isInputEnabled}></BasicInput>
          <BasicInput label="Start Date" type="month" className="small-input" isInputEnabled={isInputEnabled}></BasicInput>
          <BasicInput label="End Date" type="month" className="small-input" isInputEnabled={isInputEnabled}></BasicInput>
        </div>
      </div>
    </section>
  )

}

export default WorkField
