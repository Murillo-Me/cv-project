
function BasicInput({label, type, className, isInputEnabled}) {

    return (
      <div className={"BasicInput " + className}>
        <label htmlFor="name-input">{label}</label>
        <input type={type} name="name-input" id="name-value" disabled={!isInputEnabled}/>
      </div>
    )
}

export default BasicInput
