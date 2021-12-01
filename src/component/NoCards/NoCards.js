import React from "react";
import "./NoCards.css";

const NoCards = (props) => {
  return (
    <div className="container">
      <h2 className="no-card-title">No More Tours Remaining</h2>
      <button className="refreshBtn" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
};

export default NoCards;
