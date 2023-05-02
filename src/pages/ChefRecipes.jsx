import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/cards/RecipeCard";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const {
    name,
    image,
    bio,
    likes,
    numberOfRecipes,
    yearsOfExperience,
    recipes,
  } = chef;
  return (
    <div>
      <div className="hero bg-base-200 py-7">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{bio}</p>
            <ul className="text-base">
              <li>
                <span className="font-medium">Number of Recipes: </span>
                {numberOfRecipes}
              </li>
              <li>
                <span className="font-medium">Years of Experience: </span>
                {yearsOfExperience}
              </li>
              <li>
                <span className="font-medium">Likes: </span>
                {likes}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-14 text-4xl text-center font-semibold">
        Experience the Delightful Flavors of {name}'s Signature Recipes
      </p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-14">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </section>
    </div>
  );
};

export default ChefRecipes;
