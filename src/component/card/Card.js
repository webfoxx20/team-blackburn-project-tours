import React from "react";
import Description from "../desc/Description";
import "./Card.css";

const Card = ({ cardData }) => {
  console.log(cardData);
  const ShowCard = cardData.map((data) => {
    return (
      <div className="single-tour" key={data.id}>
        <img src={data.image} />
        <div className="card-body">
          <Description description={data.info} maxLength={200} />
        </div>
      </div>
    );
  });
  return <main>{ShowCard}</main>;
};

export default Card;
