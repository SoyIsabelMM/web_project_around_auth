import Profile from "./Profile";
import { useContext } from "react";
import CardsElements from "./CardsElements";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onCardLike,
  onCardDelete,
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
    </main>
  );
}

export default Main;
