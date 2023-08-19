import React from "react";
import Profile from "./Profile";
import Elements from "./Elements";
import Popup from "./Popup";
import Modal from "./Modal";
import Template from "../Template";
import PopupWithForm from "./PopupWithForm";

function Main() {
  const handleEditAvatarClick = () => {
    const modalElement = document.querySelector(".modal-window ");
    const formElement = modalElement.querySelector("#change-profile");

    modalElement.classList.remove("open");
    formElement.classList.remove("open");
  };

  const handleEditProfileClick = () => {
    const popupEditProfile = document.querySelector("#edit-profile-form");

    popupEditProfile.classList.remove("open");
  };

  const handleAddPlaceClick = () => {
    const popupEditProfile = document.querySelector("#add-picture-form");

    popupEditProfile.classList.remove("open");
  };

  return (
    <main className="content">
      <Profile
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
      />

      <Elements />
      <Popup />
      <Modal />
      <Template />
    </main>
  );
}

export default Main;
