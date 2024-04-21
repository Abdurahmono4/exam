import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";

import { useState } from "react";
function RecipiesList({ recipies, deleteRecipie }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {recipies.map((recipe) => {
        return (
          <div key={recipe.id} className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={recipe.image}
                alt=" This is a Meal"
                className="h-full w-full "
              />
            </figure>
            <div className="card-body w-full h-40 ">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="">{recipe.method}</p>
              <div className="card-actions  flex flex-nowrap ">
                <Link
                  to={`/singleRecipe/${recipe.id}`}
                  className="btn btn-primary "
                >
                  Read More
                </Link>
                <button
                  className="btn btn-secondary  "
                  onClick={() => deleteRecipie(recipe.id)}
                >
                  <IoTrashOutline />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipiesList;
