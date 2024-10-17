import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>FoodRecipe</p>

      <div>
        <style>
          {`
           input::placeholder {
           color: white;
        
          }
        `}
        </style>

        <input
          style={{
            padding: "20px 250px 20px 5px",
            justifyContent: "center",
            display: "flex",
            margin: "auto",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "darkgrey",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter the ItemName"
        />
        <button style={{ padding: "10px 20px" }}>Search</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
