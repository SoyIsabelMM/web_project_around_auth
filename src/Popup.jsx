import React from "react";
import closeIcon from "./images/close-icon.png";

function Popup() {
  return (
    <>
      <section className="poppup open">
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="popup__container-close-popup">
            <img
              src={closeIcon}
              alt="botón
              para cerrar cuadro emergente"
              className="popup__container-close-icon"
            />
            <h3 className="popup__container-text">Editar perfil</h3>
          </button>

          <form className="popup__container-form" noValidate>
            <input
              type="text"
              className="popup__container-input"
              placeholder="Nombre"
              id="name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-error"></span>
            <input
              type="text"
              placeholder="Profesión"
              className="popup__container-input"
              id="about-me"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error about-me-error"></span>
            <button className="popup__container-save-btn" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </section>

      <section className="popup open" id="add-picture-form">
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <button className="popup__container-close-popup">
            <img
              src={closeIcon}
              alt="botón
              para cerrar cuadro emergente"
              className="popup__container-close-icon"
            />
          </button>
          <h3 className="popup__container-text">Nuevo Lugar</h3>

          <form className="popup__container-form" noValidate>
            <input
              type="text"
              className="popup__container-input"
              placeholder="Título"
              id="title-place"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error title-place-error"></span>

            <input
              type="url"
              placeholder="Enlace a la imagen"
              className="popup__container-input"
              id="new-image"
              required
            />
            <span className="popup__input-error new-image-error"></span>
            <button className="popup__container-save-btn" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Popup;
