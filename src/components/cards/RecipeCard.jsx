import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const [disable, setDisable] = useState(false);
  const { recipeName, ingredients, cookingMethod, rating } = recipe;

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-10">{recipeName}</h2>
        <p>
          <span className="font-medium">Ingredients:</span> {ingredients}
        </p>
        <p>
          <span className="font-medium">Cooking-Method: </span>
          {cookingMethod}
        </p>
        <div className="card-actions justify-between items-center mt-10">
          <div className="flex gap-1">
            <p>Rating: </p>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </div>
          <button
            onClick={() => setDisable(true)}
            className="btn btn-info normal-case text-base"
            disabled={disable}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
