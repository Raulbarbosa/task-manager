import "./styles.css";

export default function Example({ name, type, value, placeholder, handler }) {
  return (
    <input
      required="required"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handler}
    />
  );
}
