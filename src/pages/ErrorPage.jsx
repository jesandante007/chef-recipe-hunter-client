import React from "react";
import { Link, useRouteError } from "react-router-dom";
import error from '../assets/images/error.jpg'

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-5xl font-semibold space-y-10">
        <img src={error} />
        <p>The page you are looking for doesn't exist or an other error occurred.</p>
        <Link to="/" className="block">
          <button className=" btn btn-info">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
