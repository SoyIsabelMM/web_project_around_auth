import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

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
    </div>
  );
}

export default App;
