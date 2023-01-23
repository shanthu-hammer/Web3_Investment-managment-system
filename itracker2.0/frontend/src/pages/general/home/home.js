import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/income");}
  return (
    <div>
      <h1>welcome to home page </h1>
      <div className="button-container">
              <input onClick= {handleClick
              } type="submit" />
            </div>
    </div>
  );
};
 export default Home;


