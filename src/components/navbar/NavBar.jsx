import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          padding: "20px 0px 20px 20px",
          marginBottom: "-50px",
        }}
      >
        FoodRecipe
      </p>

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
        <button
          style={{
            padding: "17px 38px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginLeft: "62rem",
            borderRadius: "13px",
            marginTop: "-55px",
            fontSize: "medium",
            backgroundColor: "black",
            color: "whitesmoke",
          }}
        >
          Search
        </button>
      </div>
      <div style={{display:"flex", justifyContent:"space-around",}}>
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
    </div>
  );
};

export default NavBar;
