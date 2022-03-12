import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  return (
    <div>
      <h1>Home</h1>
      <p>Params: {params.param1}</p>
    </div>
  );
};

export default Home;
