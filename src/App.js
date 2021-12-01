import React, { useState, useEffect } from "react";
import Loading from "./component/loading/Loading";

import axios from "axios";
import Card from "./component/card/Card";
// import Description from "./component/desc/Description";

function App() {
  // const [price, setPrice] = useState([]);
  const [cardData, setCardData] = useState([]);
  // const [load, setLoad] = useState(true);

  const url = "https://course-api.com/react-tours-project";
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setCardData(response.data);
    };
    getData();
  }, []);
  // here is  the data for the card

  const renderCard = () => {
    return cardData.length ? (
      <Card cardData={cardData} />
    ) : (
      <Loading loader="loading..." />
    );
  };
  return <div className="section">{renderCard()}</div>;
}

export default App;
