import React, { useState } from "react";
import "./Description.css";

const Description = ({ description, maxLength }) => {
  const [showLess, setShowLess] = useState(true);
  if (description.length <= maxLength) {
    return (
      <div>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div>
      {showLess ? `${description.slice(0, maxLength).trim()} ...` : description}
      {showLess ? (
        <span className="show" onClick={() => setShowLess(false)}>
          {" "}
          <span className="show-more">Show More</span>
        </span>
      ) : (
        <span className="show" onClick={() => setShowLess(true)}>
          {" "}
          <span className="show-less"> Show Less</span>
        </span>
      )}
    </div>
  );
};

export default Description;
{
  /* <div>
{cardData && (
  <div className="cardalldata">
    {cardData.map((card, index) => (
      <div key={index} className="description">
        <Description description={card.info} maxLength={200} />
      </div>
    ))}
  </div>
)}
</div> */
}
