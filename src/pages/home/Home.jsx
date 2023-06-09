import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../components/cards/ChefCard";
import CustomerReview from "./CustomerReview";
import Slider from "./Slider";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="hero bg-[url('/src/assets/images/hero.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-20">
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
          </div>
        </div>
      </div>
      <p className="mt-28 text-4xl text-center font-semibold">Meet Our Master Chefs: A Collection of Culinary Creativity</p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-14">
        {
            data.map(chef => <ChefCard key={chef.id} chef={chef} />)
        }
      </section>
      <p className="mt-28 text-4xl text-center font-semibold">Our Customers Love Spice Route</p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-14 mt-28">
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </section>
      <p className="mt-28 text-4xl text-center font-semibold">Mouthwatering Dishes to Try</p>
      <section className="my-14">
        <Slider />
      </section>
    </div>
  );
};

export default Home;
