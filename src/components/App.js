import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import { CurrentUserContext } from "../context/CurrentUserContext";
import api from "../utils/api";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  // const [confirmation, setConfirmation] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .getUserInfoFromServer()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log("Disculpa, se ha encontrado un error:", err);
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

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(true);
    setIsEditProfilePopupOpen(true);
    setIsAddPlacePopupOpen(true);
    setSelectedCard(false);
    // setConfirmation(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  // const handleConfirmation = (card) => {
  //   setConfirmation(card);
  // };

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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          selectedCard={selectedCard}
          // confirmation={confirmation}
          // onConfirmation={handleConfirmation}
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
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
