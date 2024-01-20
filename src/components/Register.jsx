import React, { useState } from "react";
import Input from "./Input";
import InfoTooltip from "./InfoTooltip";
import { Link } from "react-router-dom";

function Register({ title, onSubmit, nameBtn }) {
  const [isInfoOpen, setIsInfoOpen] = useState("");

  const handleCloseInfo = () => {
    setIsInfoOpen("open");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <>
      <section className="authenticate" id="register">
        <h3 className="title">{title}</h3>
        <form className="authenticate__form" noValidate onSubmit={handleSubmit}>
          <Input
            className={"authenticate__input"}
            type={"email"}
            placeholder={"Correo electrónico"}
            id={"email"}
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
          ¿Ya eres miembro? Inicia{" "}
          <Link to="/signin" className="link">
            sesión aquí
          </Link>
        </p>
      </section>
      <InfoTooltip
        error={false}
        isOpen={isInfoOpen}
        onClose={handleCloseInfo}
      />
    </>
  );
}

export default Register;
