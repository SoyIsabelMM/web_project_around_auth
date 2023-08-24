import React from "react";
import iconDelete from "../images/icon-delete.png";
import btnLike from "../images/btn-like.png";

function Card({ name, link, likes, onCardClick }) {
  const handleClick = () => {
    onCardClick({ name, link });
  };

  return (
    <div className="card-elements__container">
      <button className="card-elements__container-btn-delete">
        <img
          className="card-elements__container-icon-delete"
          src={iconDelete}
          alt="icon eliminar imágen"
        />
      </button>
      <img
        className="card-elements__container-image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="card-elements__container-footing">
        <h3 className="card-elements__container-footing-title"> {name} </h3>
        <img
          className="card-elements__container-footing-btn"
          src={btnLike}
          alt="like inactivo"
        />
        <span className="card-elements__like-counter"> {likes} </span>
      </div>
    </div>
  );
}

export default Card;
