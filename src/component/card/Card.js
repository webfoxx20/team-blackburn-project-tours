import React, { useState } from "react";
import Description from "../desc/Description";
import Button from "../button/Button";
import "./Card.css";
import Price from "../TourPrice/Price";

const Card = ({ cardData }) => {
  const [cards, setCards] = useState(cardData)
  console.log(cardData);

  const removeCard = (cardId) => {
        setCards(cards.filter(card => card.id !== cardId))
  }

  const ShowCard = cards.map((data) => {
    return (
      <div className="single-tour" key={data.id}>
        <img src={data.image} alt="" />
        <div className="card-body">
          <Price venue={data.name} price={data.price} />
          <Description description={data.info} maxLength={200} />

          <Button id={data.id} removeCard={removeCard} />
        </div>
      </div>
    );
  });
  return <main>{ShowCard}</main>;
};

export default Card;
