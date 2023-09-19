import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmationPopup from "./ConfirmationPopup";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  //** Manejo de estado de los Popups (abrir o cerrar) valor inicial: Cerrado "true"*/
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(true);

  //**Manejo de estado de la data del usuario */
  const [currentUser, setCurrentUser] = useState(null);

  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  const [confirmation, setConfirmation] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);

  useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log("Disculpa, se ha encontrado un error:", err);
      });

    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(false);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(false);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleOpenConfirmation = (card) => {
    setCardToDelete(card);
    setConfirmation(true);
  };

  const handleUpdateUser = async (data) => {
    api
      .saveDataToServer(data.name, data.about)
      .then((userData) => {
        const updateUser = {
          id: currentUser?._id,
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar,
        };

        setCurrentUser(updateUser);
        setIsEditProfilePopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateAvatar = async (data) => {
    api
      .updateAvatar(data)
      .then((avatarUrl) => {
        const updateAvatar = {
          id: currentUser._id,
          avatar: avatarUrl.avatar,
          name: avatarUrl.name,
          about: avatarUrl.about,
        };
        setCurrentUser(updateAvatar);
        setIsEditAvatarPopupOpen(true);
      })
      .catch((err) => {
        console.log("No se ha actualizado el perfil:", err);
      });
  };

  function handleCardLikeOrDisLike(card) {
    const isLike = card.likes.some((i) => i._id === currentUser._id);

    let apiRequest = isLike
      ? api.deleteLikeFromCard(card._id, isLike)
      : api.addLikeFromCard(card._id, !isLike);

    apiRequest.then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  async function handleCardDelete() {
    const isCard = cardToDelete._id;
    api.deleteCardFromServer(isCard).then(() => {
      setCards((prevCards) => prevCards.filter((c) => c._id !== isCard));
    });
  }

  const handleAddPlaceSubmit = async (newPlaceData) => {
    api
      .addNewCardToServer(newPlaceData.name, newPlaceData.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsAddPlacePopupOpen(true);
      })
      .catch((err) => {
        console.log("Ha ocurrido un error al cargar la nueva imágen:", err);
      });
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(true);
    setIsEditProfilePopupOpen(true);
    setIsAddPlacePopupOpen(true);
    setSelectedCard(false);
    setConfirmation(false);
    setCardToDelete(null);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLikeOrDisLike}
          onCardDelete={handleOpenConfirmation}
          cards={cards}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />

        <ConfirmationPopup
          onClose={closeAllPopups}
          isOpen={confirmation}
          onConfirm={handleCardDelete}
        />

        <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
