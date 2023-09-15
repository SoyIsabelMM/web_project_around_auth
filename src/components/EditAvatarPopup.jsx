import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import Input from "./Input";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const handleChangeAvatar = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleSubmit = () => {
    onUpdateAvatar({
      avatar: currentUser.avatar,
    });
    console.log("hola");
  };

  return (
    <>
      <PopupWithForm
        title={"Cambiar foto de perfil"}
        className="modal-window"
        id="change-profile"
        nameBtn="Guardar"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        classNameModal="modal-window__change-image"
      >
        <Input
          type="url"
          className="modal-window__input-url-change"
          placeholder="Título"
          id="url-change"
          value={avatar}
          onChange={handleChangeAvatar}
        >
          <span className="url-change-error"></span>
        </Input>
      </PopupWithForm>
    </>
  );
}

export default EditAvatarPopup;
