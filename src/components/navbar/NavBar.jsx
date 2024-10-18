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
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginLeft: "75rem",
              marginTop: "-50px",
              paddingBottom: "40px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            <li style={{ listStyleType: "none" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/favourite"
              >
                Favourite
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
