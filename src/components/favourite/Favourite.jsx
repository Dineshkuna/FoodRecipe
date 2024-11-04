import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ padding: "40px 100px", display: "flex", flexWrap: "wrap" }}>
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "auto",
                paddingLeft: "20px",
                paddingBottom: "20px",
                border: "1px solid lightgray",
                borderRadius: "10px",
                margin: "10px",
                textWrap: "wrap",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                  paddingTop: "10px",
                }}
                src={item.image_url}
                alt={item.title}
              />
              <p style={{ fontSize: "13px", color: "blueviolet" }}>
                {item.publisher}
              </p>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                {item.title}
              </p>
              <Link to={`/oneproduct/${item.id}`}>
                <button
                  style={{
                    padding: "10px 30px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  RECIPE DETAILS
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "20px", color: "darkred" }}>
            No favorites added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Favourite;
