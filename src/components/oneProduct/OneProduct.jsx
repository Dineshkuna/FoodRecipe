import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const OneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <NavBar/>
    <div style={{ padding: "40px 100px" }}>
      
      {product.image_url ? (
        <div style={{display:"flex", gap:"60px"}}>
          <div >
          <img src={product.image_url} alt={product.title} style={{ width: "700px", borderRadius: "10px" }} />
          </div>
          <div>
          <p><b style={{color:"blueviolet"}}>{product.publisher}</b> </p>
          <p><b style={{fontSize:"20px"}}>{product.title}</b></p>
          <button style={{backgroundColor: "black", padding:"10px 20px", color:"white", borderRadius:"5px"}}>REMOVE FROM FAVOURITES</button>
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
