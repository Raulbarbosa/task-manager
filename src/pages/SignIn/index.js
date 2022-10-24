import { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";
import Button from "../../components/Button";
import InputLogin from "../../components/InputLogin";
import { Link, useNavigate } from "react-router-dom";
import { getItem, setItem } from "../../utils/storage";

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleChangeInputValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.email || !form.password) {
        return;
      }

      const response = await api.post("/login", {
        email: form.email,
        password: form.password,
      });

      const { token } = response.data;

      setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="content-login">
      <div className="side-image"></div>
      <div className="side-login">
        <span className="text-login">Login</span>
        <form className="form-login" onSubmit={handleSubmit} autoComplete="off">
          <InputLogin
            name={"email"}
            type={"text"}
            value={form.email}
            placeholder={"E-mail"}
            handler={handleChangeInputValue}
          />
          <InputLogin
            name={"password"}
            type={"password"}
            value={form.password}
            placeholder={"Password"}
            handler={handleChangeInputValue}
          />
          <Button name={"Entrar"} />
        </form>
        <span className="signUp">
          <Link to={"/sign-up"}>Não possui conta? Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
}
