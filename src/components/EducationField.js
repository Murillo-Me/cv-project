import BasicInput from "./BasicInput";

function EducationField({handleDelete, id, inputState}) {

  return (
    <section className="EducationField">
      <button className="delete-field-btn" onClick={(e) => handleDelete(e, id)}>X</button>
      <h1 className="section-title">Education</h1>
      <div className="section-input">
        <div className="input-pt1">
          <BasicInput label="Institution" type="text" className="big-input" inputState={inputState}></BasicInput>
        </div>
        <div className="input-pt2">
          <BasicInput label="Title" type="text" className="medium-input" inputState={inputState}></BasicInput>
          <BasicInput label="Year of Conclusion" type="number" className="small-input" inputState={inputState}></BasicInput>
        </div>
      </div>
    </section>
  )
}

export default EducationField
