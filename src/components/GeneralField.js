import BasicInput from "./BasicInput";

function GeneralField({isInputEnabled}) {

  return (
    <section className="GeneralField">
      <BasicInput label="Name" type="text" className="medium-input" isInputEnabled={isInputEnabled}></BasicInput>
      <BasicInput label="Phone" type="tel" className="extra-small-input" isInputEnabled={isInputEnabled}></BasicInput>
      <BasicInput label="e-mail" type="email" className="big-input" isInputEnabled={isInputEnabled}></BasicInput>
    </section>
  )
}

export default GeneralField
