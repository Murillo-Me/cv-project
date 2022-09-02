import BasicInput from "./BasicInput";

function GeneralField({inputState}) {

  return (
    <section className="GeneralField">
      <BasicInput label="Name" type="text" className="medium-input" inputState={inputState}></BasicInput>
      <BasicInput label="Phone" type="tel" className="extra-small-input" inputState={inputState}></BasicInput>
      <BasicInput label="e-mail" type="email" className="big-input" inputState={inputState}></BasicInput>
    </section>
  )
}

export default GeneralField
