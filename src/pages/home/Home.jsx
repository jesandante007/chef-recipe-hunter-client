import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="hero bg-[url('/src/assets/hero.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-14">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Flavors of India: Discover the Exquisite Cuisine of Our Top Chefs
            </h1>
            <p className="mb-5">
              Indulge in a culinary journey through India with our top chefs.
              Discover the authentic flavors of traditional recipes with a
              modern twist, and tantalize your taste buds with a variety of
              unique and delicious dishes.
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
      <p className="mt-14 text-4xl text-center font-semibold">Meet Our Master Chefs: A Collection of Culinary Creativity</p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-14">
        {
            data.map(chef => <Card key={chef.id} chef={chef} />)
        }
      </section>
    </div>
  );
};

export default Home;
