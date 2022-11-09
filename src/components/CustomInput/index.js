import "./styles.css";

export default function CustomInput({
  name,
  type,
  value,
  placeholder,
  handler,
}) {

  const capitalize = () => {
    let label;
    let firstLetter = name[0];
    let rest = name.slice(1)
    label = firstLetter.toUpperCase() + rest;
    return label
  }

  return (
    <div className="input-login">
      <span>{capitalize(name)}</span>
      <input
        required="required"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handler}
      />
    </div>
  );
}
