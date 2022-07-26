import BasicInput from "./BasicInput";

function EducationField({handleDelete, id}) {

  return (
    <section className="EducationField">
      <button className="delete-field-btn" onClick={(e) => handleDelete(e, id)}>X</button>
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

export default EducationField