import React from "react";
import closeIcon from "../images/close-icon.png";

function Modal() {
  return (
    <>
      <section className="modal open">
        <div className="modal__container">
          <img
            className="modal__container-close"
            src={closeIcon}
            alt="icon para cerra la
            imágen"
          />
          <img className="modal__image-card" alt="" id="modal" />
          <h3 className="modal__title-text"></h3>
        </div>
      </section>

      <section className="modal-window open">
        <div className="modal-window__overlay"></div>
        <div className="modal-window__container open" id="say-yes">
          <img
            className="modal-window__btn-close"
            src={closeIcon}
            alt="icon para cerra la
            imágen"
          />
          <div className="modal-window__form-delete-card">
            <h3 className="modal-window__modal-title">¿Estás seguro?</h3>
            <button className="modal-window__btn-delete" type="submit">
              Si
            </button>
          </div>
        </div>

        <div className="modal-window__change-image open" id="change-profile">
          <img
            className="modal-window__close-change"
            src={closeIcon}
            alt="icon para cerra la
            imágen"
          />

          <form className="modal-window__form-change-image" noValidate>
            <h3 className="modal-window__title-change">
              Cambiar foto de perfil
            </h3>
            <fieldset className="modal-window__fiel-change-image">
              <input
                type="url"
                className="modal-window__input-url-change"
                placeholder="https://somewebsite.com/someimage.jpg"
                id="url-change"
                required
              />
              <span className="url-change-error"></span>
            </fieldset>
            <button className="modal-window__keep-btn" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Modal;
