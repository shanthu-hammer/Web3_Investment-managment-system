import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/income");
  }
  return (
    <div>
      <h1>welcome to home page </h1>
      <a href="http://localhost:3000/income">
        <div className="button-container">
          <input type="submit" />
        </div>
      </a>
    </div>
  );
};
export default Dashboard;
