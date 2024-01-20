import React from "react";
import Input from "./Input";

function Login({ title, onSubmit, nameBtn }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
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
        ¿Aún no eres miembro? Regístrate aquí
      </p>
    </section>
  );
}

export default Login;
