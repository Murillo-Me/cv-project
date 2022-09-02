
function BasicInput({label, type, className, inputState}) {

    return (
      <div className={"BasicInput " + className}>
        <label htmlFor="name-input">{label}</label>
        <input type={type} name="name-input" id="name-value" disabled={!inputState}/>
      </div>
    )
}

export default BasicInput
