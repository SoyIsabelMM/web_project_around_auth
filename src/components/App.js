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
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
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
      />
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
