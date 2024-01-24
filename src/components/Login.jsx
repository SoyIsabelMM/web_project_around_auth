import React, { useState } from "react";
import Input from "./Input";
import InfoTooltip from "./InfoTooltip";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth";

function Login({ title, handleLogin, nameBtn }) {
  const [isInfoOpen, setIsInfoOpen] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onLogin = (evt) => {
    evt.preventDefault();

    auth
      .authorize(credentials.password, credentials.email)
      .then((responseData) => {
        console.log("la data", responseData);

        if (responseData.token) {
          setCredentials({ email: "", password: "" });
          navigate("/");
          handleLogin();
        }
      })
      .catch((err) => {
        setIsInfoOpen(true);
        setCredentials({ email: "", password: "" });
        handleLogin();
        console.log(err);
      });
  };

  const handleCloseInfo = () => {
    setIsInfoOpen("open");
    navigate("/signin", { state: {} });
  };

  return (
    <>
      <section className="authenticate" id="login">
        <h3 className="title">{title}</h3>
        <form className="authenticate__form" noValidate onSubmit={onLogin}>
          <Input
            className={"authenticate__input"}
            type={"email"}
            placeholder={"Correo electrónico"}
            id={"email"}
            maxLength={"200"}
            onChange={handleChange}
          />
          <Input
            className={"authenticate__input"}
            type={"password"}
            placeholder={"Contraseña"}
            id={"password"}
            maxLength={"200"}
            onChange={handleChange}
          />
          <button className="authenticate__btn">{nameBtn}</button>
        </form>
        <p className="authenticate__register">
          ¿Aún no eres miembro?
          <Link to="/signup" className="link">
            Regístrate aquí
          </Link>
        </p>
      </section>

      <InfoTooltip error={true} isOpen={isInfoOpen} onClose={handleCloseInfo} />
    </>
  );
}

export default Login;
