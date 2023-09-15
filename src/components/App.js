import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import { CurrentUserContext } from "../context/CurrentUserContext";
import api from "../utils/api";

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

  const handleUpdateUser = (data) => {
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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          selectedCard={selectedCard}
          onUpdateUser={handleUpdateUser}
          // confirmation={confirmation}
          // onConfirmation={handleConfirmation}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
