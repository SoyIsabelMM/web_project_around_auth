import React from "react";
import closeIcon from "../images/close-icon.png";

function ConfirmationPopup(props) {
  return (
    <section className={` ${props.className} ${props.isOpen ? "open" : ""}`}>
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
    </section>
  );
}

export default ConfirmationPopup;
