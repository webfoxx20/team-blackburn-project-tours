import React, { useState } from "react";
import Description from "../desc/Description";
import Button from "../button/Button";
import "./Card.css";
import Price from "../TourPrice/Price";

const Card = ({ cardData }) => {
  console.log(cardData);
  const ShowCard = cardData.map((data) => {
    return (
      <div className="single-tour" key={data.id}>
        <img src={data.image} />
        <div className="card-body">
          <Price venue={data.name} price={data.price} />
          <Description description={data.info} maxLength={200} />

          <Button />
        </div>
      </div>
    );
  });
  return <main>{ShowCard}</main>;
};

export default Card;
