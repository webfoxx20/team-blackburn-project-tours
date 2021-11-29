import React, { useState, useEffect } from "react";
import Loading from "./component/loading/Loading";
import axios from "axios";
import Description from "./component/desc/Description";

function App() {
  const [cardData, setCardData] = useState([]);
  const [load, setLoad] = useState(true);
  const url = "https://course-api.com/react-tours-project";
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setCardData(response.data);
    };
    getData();
    setTimeout(() => setLoad(false), 5000);
  }, []);
  // here is  the data for the card
  console.log(cardData);

  return (
    <div className="section">
        
      { load ?
      // Load this for 5s everytime the page is refreshed
      <Loading loader="loading..." />
      : 
      //  else show card details
      <div>
      {cardData && (
        <div className="cardalldata">
          {cardData.map((card, index) => (
          <div key={index} className="description">
            <Description description={card.info} maxLength={200} />
          </div>
          ))}
        </div>
      )}
     </div>
      }
    </div>
  );
}

export default App;
