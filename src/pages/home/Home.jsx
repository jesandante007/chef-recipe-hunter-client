import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="hero bg-[url('/src/assets/hero.jpg')]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-14">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Flavors of India: Discover the Exquisite Cuisine of Our Top Chefs</h1>
            <p className="mb-5">
            Indulge in a culinary journey through India with our top chefs. Discover the authentic flavors of traditional recipes with a modern twist, and tantalize your taste buds with a variety of unique and delicious dishes.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
