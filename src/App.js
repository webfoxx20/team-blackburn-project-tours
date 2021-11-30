import React, { useState, useEffect } from "react";
import Loading from "./component/loading/Loading";
import axios from "axios";
// import Description from "./component/desc/Description";

function App() {
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
  console.log(cardData);

  return (
    <div className="section">
      <Loading loader="loading..." />
    </div>
  );
}

export default App;
