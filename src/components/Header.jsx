import React from "react";
import logo from "../images/header-logo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo-header"
        src={logo}
        alt="Logo Around, alrededor
        de los estados unidos"
      />
      <div className="divider-section"></div>
    </header>
  );
}

export default Header;
