import "./styles.css";

export default function Button({ name }) {
  return <button className="btn">{name ? name : "TESTE"}</button>;
}
