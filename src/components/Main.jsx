import Profile from "./Profile";
import { useContext } from "react";
import CardsElements from "./CardsElements";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onClose,
  onCardClick,
  onCardLike,
  onCardDelete,
  isAddPlacePopupOpen,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <Profile
        userName={currentUser && currentUser.name}
        userAbout={currentUser && currentUser.about}
        userAvatar={currentUser && currentUser.avatar}
        onEditAvatarClick={onEditAvatarClick}
        onEditProfileClick={onEditProfileClick}
        onAddPlaceClick={onAddPlaceClick}
      />

      <CardsElements
        cards={cards}
        onCardClick={onCardClick}
        onPopupConfirmation={onCardDelete}
        onCardLike={onCardLike}
      />

      <PopupWithForm
        title={"Nuevo Lugar"}
        className="popup"
        id="add-picture-form"
        nameBtn="Guardar"
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
    </main>
  );
}

export default Main;
