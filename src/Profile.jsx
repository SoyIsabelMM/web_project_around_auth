import React from "react";
import imageProfile from "./images/image-profile.jpeg";
import iconEdit from "./images/icon-edit.png";
import addBtn from "./images/add-btn.png";

function Profile() {
  return (
    <section className="profile">
      <img src={imageProfile} alt="Foto de Perfil" className="profile__image" />

      <div className="profile__overlay-edit">
        <img
          className="profile__btn-edit-photo"
          src={iconEdit}
          alt="Botón para editar
            foto del perfil"
        />
      </div>
      <div className="profile__info">
        <button className="profile__info-edit-btn">
          <img
            className="profile__info-icon-edit"
            src={iconEdit}
            alt="Botón editar perfil"
          />
        </button>
        <h1 className="profile__info-name">James Costeu</h1>
        <h2 className="profile__info-about">Develop</h2>
      </div>

      <button className="profile__add-btn">
        <img
          className="profile__add-btn-image"
          src={addBtn}
          alt="Botón para agregar
            imagenes"
        />
      </button>
    </section>
  );
}

export default Profile;
