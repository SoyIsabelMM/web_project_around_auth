import React from "react";
import closeIcon from "../images/close-icon.png";

function PopupWithForm({ name, title }) {
  return (
    <section className="popup">
      <div className="pup__overlay"></div>
      <div className="popup__container">
        <button className="popup__container-close-popup">
          <img
            src={closeIcon}
            alt="botón
              para cerrar cuadro emergente"
            className="popup__container-close-icon"
          />
        </button>

        <h3 className="popup__container-text">{title}</h3>

        <form className="popup__container-form" noValidate>
          <button className="popup__container-save-btn" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
