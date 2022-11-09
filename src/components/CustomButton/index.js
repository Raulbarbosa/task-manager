import "./styles.css";

export default function CustomButton({ name }) {
  return <button className="btn">{name ? name : "TESTE"}</button>;
}
