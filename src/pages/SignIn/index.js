import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import ErrorMessage from "../../components/ErrorMessage";
import LeftSideImage from "../../components/LeftSideImage";
import NavigateLinks from "../../components/NavigateLinks";
import api from "../../services/api";
import { getItem, setItem } from "../../utils/storage";
import "./styles.css";

export default function SignIn() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [formSignIn, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleChangeInputValueSignIn = (e) => {
    setForm({ ...formSignIn, [e.target.name]: e.target.value });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    try {
      if (!formSignIn.email || !formSignIn.password) {
        setError("Please fill all the fields.");
        return;
      }

      const response = await api.post("/login", {
        email: formSignIn.email,
        password: formSignIn.password,
      });

      const { token } = response.data;

      setItem("token", token);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      return;
    }
  };

  return (
    <div className="content-login">
      <LeftSideImage />
      <div className="side-login">
        <NavigateLinks />
        <form className="form-login" onSubmit={handleSubmitSignIn} autoComplete="off">
          <CustomInput
            name={"email"}
            type={"text"}
            value={formSignIn.email}
            placeholder={"E-mail"}
            handler={handleChangeInputValueSignIn}
          />
          <div className="password-login-area">
            <Link to={"/*"} className="miss-password">Esqueceu sua senha?</Link>
            <CustomInput
              name={"password"}
              type={"password"}
              value={formSignIn.password}
              placeholder={"Password"}
              handler={handleChangeInputValueSignIn}
            />
          </div>
          {error && <ErrorMessage message={error} />}
          <CustomButton name={"Entrar"} />
        </form>
        <span className="signUp">
          <Link to={"/sign-up"}>Não possui conta? Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
}
