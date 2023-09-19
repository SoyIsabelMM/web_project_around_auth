import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import Input from "./Input.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = () => {
    onUpdateUser({
      name: name,
      about: description,
    }).then(() => {
      setName("");
      setDescription("");
    });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <PopupWithForm
        title={"Editar Perfil"}
        className="popup"
        id="edit-profile-form"
        nameBtn="Editar"
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          className="popup__container-input"
          placeholder="Nombre"
          value={name}
          id="name"
          maxLength="40"
          onChange={handleNameChange}
        >
          <span className="popup__input-error name-error"></span>
        </Input>

        <Input
          type="text"
          className="popup__container-input"
          placeholder="Profesión"
          value={description}
          id="about-me"
          maxLength="200"
          onChange={handleDescriptionChange}
        >
          <span className="popup__input-error about-me-error"></span>
        </Input>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopup;
