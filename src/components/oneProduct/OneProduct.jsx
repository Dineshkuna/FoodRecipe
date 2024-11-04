import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const OneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    singleItem();
  }, [id]);

  async function singleItem() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      setProduct(data?.data?.recipe || {});
    } catch (error) {
      console.log(error);
    }
  }

  const addFavourite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = favorites.some(fav => fav.id === product.id);

    if (!isAlreadyFavorite) {
      favorites.push({
        id: product.id,
        title: product.title,
        publisher: product.publisher,
        image_url: product.image_url,
      });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    // Navigate to Favourite page after adding to favorites
    navigate("/favourite");
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: "40px 100px" }}>
        {product.image_url ? (
          <div style={{ display: "flex", gap: "60px" }}>
            <div>
              <img
                src={product.image_url}
                alt={product.title}
                style={{ width: "500px", borderRadius: "10px" }}
              />
            </div>
            <div>
              <p><b style={{ color: "blueviolet" }}>{product.publisher}</b></p>
              <p><b style={{ fontSize: "20px" }}>{product.title}</b></p>
              <button
                onClick={addFavourite}
                style={{
                  backgroundColor: "black",
                  padding: "10px 20px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                ADD TO FAVOURITES
              </button>
              <p><b>Ingredients:</b></p>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.description}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default OneProduct;
