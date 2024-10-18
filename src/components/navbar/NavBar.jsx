import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState(null);

  async function Product() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();
      setProductData(data?.data?.recipes[0]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async () => {
    await Product();
  };

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
            position: 'relative',
            left: "575px",
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
          onClick={() => handleSearch()}
          style={{
            padding: "18px 38px",
            display: "flex",
            justifyContent: "center",
            // margin: "auto",
            // marginLeft: "62rem",
            borderRadius: "13px",
            // marginTop: "-55px",
            fontSize: "medium",
            backgroundColor: "black",
            color: "whitesmoke",
            position:"relative",
            left:"60rem",
            bottom:"57px"
          }}
        >
          Search
        </button>
      </div>



      {
        


      }



      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingBottom: "40px",
              fontWeight: "bold",
              fontSize: "18px",
              position: "relative",
              left:"36rem",
              bottom: "120px"
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
