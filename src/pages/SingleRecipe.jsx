import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleRecipe() {
  const { id } = useParams();
  const [recipie, setRecipie] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/recipies/" + id)
      .then((data) => {
        return data.json();
      })
      .then((recipie) => {
        setRecipie(recipie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {recipie && (
        <div className="w-full max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold text-center">{recipie.title}</h1>
          <img className="w-full" src={recipie.image} alt="" />
        </div>
      )}
    </div>
  );
}

export default SingleRecipe;
