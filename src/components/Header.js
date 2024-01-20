import React from "react";
import logo from "../images/header-logo.png";
import { useMatch, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <img
          className="header__logo-header"
          src={logo}
          alt="Logo Around, alrededor
        de los estados unidos"
        />
        {useMatch("/signin") && (
          <Link to="/signup" className="link link__auth">
            Regístrate
          </Link>
        )}

        {useMatch("/signup") && (
          <Link to="/signin" className="link link__auth">
            Iniciar Sesión
          </Link>
        )}
      </header>
      <div className="divider-section"></div>
    </>
  );
}

export default Header;
