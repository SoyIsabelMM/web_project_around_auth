import React from "react";
import Card from "./Card";

function CardsElements({ cards, onCardClick }) {
  return (
    <section className="card-elements">
      {/* Here we will show all our cards  */}
      {cards.map((card) => {
        return (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            onCardClick={() => onCardClick(card)}
          />
        );
      })}
    </section>
  );
}

export default CardsElements;
