import React from "react";
import Card from "./Card";

function CardsElements({ cards, onCardClick, onCardLike, onPopupConfirmation }) {


  return (
    <section className="card-elements">
      {/* Here we will show all our cards  */}
      {cards.map((card) => {
        return (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={() => onCardClick(card)}
            onCardLike={() => onCardLike(card)}
            onPopupConfirmation={()=> onPopupConfirmation(card) }
            owner={card.owner}
          />
        );
      })}
    </section>
  );
}

export default CardsElements;
