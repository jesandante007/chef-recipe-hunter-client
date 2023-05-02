import React from "react";

const RecipeCard = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating } = recipe;
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-10">{recipeName}</h2>
        <p><span className="font-medium">Ingredients:</span> {ingredients}</p>
        <p><span className="font-medium">Cooking-Method: </span>{cookingMethod}</p>
        <div className="card-actions justify-between items-center mt-10">
          <p>Rating: {rating}</p>
          <button className="btn btn-info normal-case text-base">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
