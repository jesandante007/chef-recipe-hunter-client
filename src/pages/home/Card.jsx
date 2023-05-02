import React from "react";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const { id, name, image, bio, likes, yearsOfExperience, numberOfRecipes } =
    chef;

  return (
    <div className="card card-compact bg-base-200 shadow-xl">
      <figure>
        <img className="h-80 w-full m-5 object-top rounded-xl" src={image} alt="chef image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <ul className="text-base">
            <li><span className="font-medium">Number of Recipes: </span>{numberOfRecipes}</li>
            <li><span className="font-medium">Years of Experience: </span>{yearsOfExperience}</li>
            <li><span className="font-medium">Likes: </span>{likes}</li>
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-info normal-case text-base">
            <Link to={`/chef/${id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
