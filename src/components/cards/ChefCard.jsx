import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, image, likes, yearsOfExperience, numberOfRecipes } = chef;

  return (
    <div className="card card-compact bg-base-200 shadow-xl">
      <figure>
        <LazyLoad
          height={320}
          width={"100%"}
          offset={200}
          threshold={0.95}
          className="m-5"
        >
          <img
            className="object-cover object-top rounded-xl"
            src={image}
            alt="chef image"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
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
        <div className="card-actions justify-end">
          <Link to={`/chef/${id}`}>
            <button className="btn btn-info normal-case text-base">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
