import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState([]);

  async function Product() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      setProductData(data?.data?.recipes || []);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async () => {
    setProductData([]);  
    await Product();
  };

  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 20px 20px", marginBottom: "-50px" }}>
        FoodRecipe
      </p>

      <div>
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
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

      <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "20px" }}>
        {productData.length > 0 ? (
          productData.map((item, index) => (
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
                alt="ProductPicture"
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
          null
        )}


        <div>
        <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingBottom: "40px",
              fontWeight: "bold",
              fontSize: "18px",
              position: "absolute",
              left: "79rem",
              bottom: "32em",
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
        </div>
      </div>

    </div>
  );
};

export default NavBar;
