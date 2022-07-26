
function BasicInput({label, type, className}) {

    return (
      <div className={"BasicInput " + className}>
        <label htmlFor="name-input">{label}</label>
        <input type={type} name="name-input" id="name-value"/>
      </div>
    )
}

export default BasicInput