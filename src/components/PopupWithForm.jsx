import closeIcon from "../images/close-icon.png";

function PopupWithForm(props) {
  return (
    <section
      className={`${props.className} ${props.isOpen ? "open" : ""}`}
      id={props.id}
    >
      <div className="popup__overlay"></div>
      <div
        className={`${
          props.classNameModal ? props.classNameModal : "popup__container"
        }`}
      >
        <button
          className="popup__container-close-popup"
          onClick={props.onClose}
        >
          <img
            src={closeIcon}
            alt="botón
              para cerrar cuadro emergente"
            className="popup__container-close-icon"
          />
        </button>

        <h3 className="popup__container-text">{props.title}</h3>

        {props.children}

        <form className="popup__container-form" noValidate>
          <button className="popup__container-save-btn" type="submit">
            {props.name}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
