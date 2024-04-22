import { useState, useEffect } from "react";
import RecipiesList from "../components/RecipiesList";

function Home() {
  const [recipies, setRecipies] = useState(null);
  const [check, setCheck] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/recipies/")
      .then((data) => {
        return data.json();
      })
      .then((recipies) => {
        setRecipies(recipies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [check]);

  const deleteRecipie = (id) => {
    console.log(id);
    fetch("http://localhost:3000/recipies/" + id, {
      method: "DELETE",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setCheck(check + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="align-element flex items-center flex-col  gap-32 ">
      {recipies && (
        <RecipiesList recipies={recipies} deleteRecipie={deleteRecipie}
         />
      )}
    </div>
  );
}

export default Home;
