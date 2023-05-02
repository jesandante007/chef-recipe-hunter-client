import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-[calc(100vh-274px)] flex justify-center items-center border rounded-full">
      <div className="bg-base-200 p-10 rounded-lg space-y-5">
        <form onSubmit={handleCreateUser} className="space-y-5">
          <p className="text-4xl font-bold text-center mb-6">Register</p>
          <label className="input-group">
            <span className="w-24">Email</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">Email</span>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">Password</span>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="input"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">PhotoURL</span>
            <input
              type="text"
              name="photo"
              placeholder="www.example.com/photo.jpg"
              className="input"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="input btn btn-info normal-case w-full"
          />
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="link-info ms-2 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
