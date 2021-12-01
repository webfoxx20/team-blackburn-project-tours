import React from "react";
import "./Price.css";

const Price = ({ venue, price }) => {
  return (
    <div className="tour-info">
      <h4>{venue}</h4>
      <h4 className="tour-price">{price}</h4>
    </div>
  );
};

export default Price;
