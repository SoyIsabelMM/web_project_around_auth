import Profile from "./Profile";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import { useEffect, useState } from "react";
import api from "../utils/api";
import CardsElements from "./CardsElements";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  onClose,
}) {
  const [userName, setUserName] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((userData) => {
        setUserName(userData.name);
        setUserAbout(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <Profile
        userName={userName}
        userAbout={userAbout}
        userAvatar={userAvatar}
        onEditAvatarClick={onEditAvatarClick}
        onEditProfileClick={onEditProfileClick}
        onAddPlaceClick={onAddPlaceClick}
      />
      <PopupWithForm
        title={"Editar Perfil"}
        className="popup"
        id="edit-profile-form"
        name="Guardar"
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
      >
        <Input
          type="text"
          className="popup__container-input"
          placeholder="Nombre"
          id="name"
          maxLength="40"
        >
          <span className="popup__input-error name-error"></span>
        </Input>

        <Input
          type="text"
          className="popup__container-input"
          placeholder="Profesión"
          id="about-me"
          maxLength="200"
        >
          <span className="popup__input-error name-error"></span>
        </Input>
      </PopupWithForm>

      <PopupWithForm
        title={"Nuevo Lugar"}
        className="popup"
        id="add-picture-form"
        name="Guardar"
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
      >
        <Input
          type="text"
          className="popup__container-input"
          placeholder="Título"
          id="title-place"
          maxLength="30"
        >
          <span className="popup__input-error title-place-error"></span>
        </Input>

        <Input
          type="url"
          className="popup__container-input"
          placeholder="Enlace a la imagen"
          id="new-image"
        >
          <span className="popup__input-error name-error"></span>
        </Input>
      </PopupWithForm>

      <PopupWithForm
        title={"Cambiar foto de perfil"}
        className="modal-window"
        id="change-profile"
        name="Guardar"
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}
        classNameModal="modal-window__change-image"
      >
        <Input
          type="url"
          className="modal-window__input-url-change"
          placeholder="Título"
          id="url-change"
        >
          <span className="url-change-error"></span>
        </Input>
      </PopupWithForm>

      <CardsElements />
    </main>
  );
}

export default Main;
