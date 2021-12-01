import React from "react";

function Button({ id, removeCard }) {
  return (
    <div className="btn ">
      <button onClick={() => removeCard(id)}>Not Interested</button>
    </div>
  );
}

export default Button;
