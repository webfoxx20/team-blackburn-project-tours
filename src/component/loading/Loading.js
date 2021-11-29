import React from "react";
import "./Loading.css";
const Loading = ({ loader }) => {
  return <h1 className="loading">{loader}.</h1>;
};

export default Loading;
