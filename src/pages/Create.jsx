import { toast } from "react-hot-toast";
import {} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Create() {
  // eslint-disable-next-line no-unused-vars
  const [newRecipe, setNewRecipe] = useState({});
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [image, setImage] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      if (!ingredients.includes(ingredient) && ingredient.trim() !== "") {
        setIngredients((prev) => [...prev, ingredient]);
        toast.success("This Item is added successfully");
        // Corrected function name
        // Reset the ingredient
      } else {
        toast.error("Ingredient already exists");
      }
    } else {
      toast.error("Ingredient cannot be empty");
    }
    setIngredient("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      method,
      image,
      cookingTime: `${cookingTime}minutes`,
      ingredients,
    };
    console.log(newRecipe);
    fetch("http://localhost:3000/recipies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(newRecipe);
  return (
    <div className="cardAdd ">
      <h1 className="text-3xl text-center font-bold mb-6 -mt-3 ">
        Create New Recipe
      </h1>

      <form
        onSubmit={() => handleSubmit}
        className="flex items-center flex-col gap-4 "
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>{" "}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ingredients:</span>
          </div>
          <div
            className="flex
          gap-3"
          >
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
            />
            <button className="btn zero btn-secondary" onClick={addIngredient}>
              Add
            </button>
          </div>
          <div className="mt-1">
            <p>
              Ingredients:{""}
              {ingredients.map((ing) => {
                return <span key={ing}>{ing},</span>;
              })}
            </p>
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Cooking Time</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Method</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          ></textarea>
        </label>
        <button className="btn btn-secondary w-full max-w-xs mb-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
