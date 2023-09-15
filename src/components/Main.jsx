import Profile from "./Profile";
import { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import CardsElements from "./CardsElements";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../context/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
// import ConfirmationPopup from "./ConfirmationPopup";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  isAddPlacePopupOpen,
  onClose,
  onCardClick,
  selectedCard,
  // onConfirmation,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLikeOrDisLike(card) {
    const isLike = card.likes.some((i) => i._id === currentUser._id);

    if (isLike) {
      api.deleteLikeFromCard(card._id, isLike).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.addLikeFromCard(card._id, !isLike).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCardFromServer(card._id).then(() => {
      setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
    });
  }

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
        // onPopupConfirmation={onConfirmation}
        onCardLike={handleCardLikeOrDisLike}
        onCardDelete={handleCardDelete}
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
      <ImagePopup onClose={onClose} selectedCard={selectedCard} />

      {/* <ConfirmationPopup onClose={onClose} isOpen={confirmation} /> */}
    </main>
  );
}

export default Main;
