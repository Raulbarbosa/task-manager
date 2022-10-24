import "./styles.css";

export default function Example({ name }) {
  return <button className="btn">{name ? name : "TESTE"}</button>;
}
