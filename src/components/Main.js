import React from 'react';
import { useState } from 'react'
import '../styles/Main.css'
import EducationField from "./EducationField";
import GeneralField from "./GeneralField";
import WorkField from "./WorkField";

function Main() {

  const components = {
    WorkField: WorkField,
    EducationField: EducationField
  }

  const [formFields, setFormFields] = useState([])
  const [isInputEnabled, setIsInputEnabled] = useState(true)
  
  function addField(e) {
    const componentName = e.target.getAttribute("data-field")
    // const FieldType = React.createElement(components[componentName],
    //                                         {
    //                                           key: formFields.length,
    //                                           id: formFields.length,
    //                                           handleDelete: deleteField,
    //                                           show: true,
    //                                           inputState: isInputEnabled,
    //                                         }
    //                                           , null)
    setFormFields(prevFormFields => prevFormFields.concat(FieldType))
  }

  function deleteField(e, id) {
    e.preventDefault()
    setFormFields(prevFormFields => {
      let newFormFields = [...prevFormFields]
      let item = {...newFormFields[id]}
      let itemProps = {...item.props, show: false}
      item = {...item, props: itemProps}
      newFormFields[id] = item
      return newFormFields
    })
  }

  return (
    <main className="Main">
      <form action="">
        <GeneralField inputState={isInputEnabled}></GeneralField>
        {formFields.map(formField => formField.props.show && formField)}
      </form>
      {isInputEnabled &&
      <div className="add-field-btn-container">
        <button data-field="EducationField" className="add-field-btn" onClick={addField}>Add Education</button>
        <button data-field="WorkField" className="add-field-btn" onClick={addField}>Add Work Experience</button>
      </div>
      }
      <button id="submit-btn" onClick={()=>setIsInputEnabled(prevInputStatus=>!prevInputStatus)}>{isInputEnabled ? 'Finish' : 'Edit'}</button>
    </main>
  )
  }

export default Main
