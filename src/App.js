import React, { useState, useEffect } from "react";
import Loading from "./component/loading/Loading";
import axios from "axios";

function App() {
  const [cardData, setCardData] = useState([]);
  const url = "https://course-api.com/react-tours-project";
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setCardData(response.data);
    };
    getData();
  }, []);
  // here is  the data for the card
  console.log(cardData);

  return (
    <div className="section">
      <Loading text="loading..." />
    </div>
  );
}

export default App;
