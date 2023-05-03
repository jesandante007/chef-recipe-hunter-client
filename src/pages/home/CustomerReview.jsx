import React from "react";
import image from "../../assets/images/img.png";
import { Rating } from "@smastrom/react-rating";

const CustomerReview = () => {
  return (
    <div className="card card-compact bg-base-200 shadow-xl relative">
      <figure className="bg-white w-full">
        <img className="h-32 absolute" src={image} />
      </figure>
      <div className="card-body bg-base-200 text-center">
        <p className="mt-12 text-lg tracking-wider">Rajesh Khanna</p>
        <p className="my-3 text-gray-500">I'm so glad I found Spice Route! The chefs are amazing and the recipes are top-notch. I'm always impressed with the quality of the dishes I make using this site. I've even impressed my friends and family with my new cooking skills!</p>
        <div className="card-actions justify-center">
          <Rating style={{ maxWidth: 100 }} value={5} readOnly />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
