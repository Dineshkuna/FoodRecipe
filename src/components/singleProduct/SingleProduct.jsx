import React from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();


  async function productBio() {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes`);
      const data = await response.json();
      console.log(data);

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Recipe Details for ID: {id}</h2> 
      <div>
        {
          productBio.length > 0 ? (productBio.map((singlebio,index) =>(
          
              <div key={index}>
                <img src={singlebio.image_url} alt="singleProductPic"/>
                <p>{singlebio.title}</p>

              </div>
          ))): (
            null
          )
        }


        
      </div>     
    </div>
  );
};

export default Recipe;











