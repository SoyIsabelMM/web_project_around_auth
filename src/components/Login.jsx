import React, { useState } from "react";
import Input from "./Input";
import InfoTooltip from "./InfoTooltip";
import { Link, useNavigate } from "react-router-dom";

function Login({ title, onSubmit, nameBtn }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  const [isInfoOpen, setIsInfoOpen] = useState("");

  const navigate = useNavigate();

  const handleCloseInfo = () => {
    setIsInfoOpen("open");
    navigate("/signin");
  };

  return (
    <>
      <section className="authenticate" id="login">
        <h3 className="title">{title}</h3>
        <form className="authenticate__form" noValidate onSubmit={handleSubmit}>
          <Input
            className={"authenticate__input"}
            type={"email"}
            placeholder={"Correo electrónico"}
            id={"email"}
            maxLength={"200"}
          />
          <Input
            className={"authenticate__input"}
            type={"password"}
            placeholder={"Contraseña"}
            id={"password"}
            maxLength={"200"}
          />
          <button className="authenticate__btn" type="submit">
            {nameBtn}
          </button>
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
