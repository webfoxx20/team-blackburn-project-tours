import React, { useState, useEffect } from "react";
// import Loading from "./component/loading/Loading";
import Price from "./component/loading/Price";
import axios from "axios";

function App() {
  const [price, setPrice] = useState([]);
  const url = "https://course-api.com/react-tours-project";
  useEffect(() => {
    const getPrice = async () => {
      const response = await axios.get(url);
      setPrice(response.data);
    };
    getPrice();
  }, []);
  // here is  the data for the card
  console.log(price);

  return (
    <div className="section">
      <Price />
      <Price />
      <Price />
    </div>
  );
}

export default App;
