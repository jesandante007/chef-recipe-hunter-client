import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setError("password must contain minimum 8 character");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      setError("password must contain at least one upper & one digit");
      return;
    }

    createUser(email, password)
      .then(() => {
        form.reset();
        toast.success('Register Successfully')
        setError("");
        navigate("/");
        updateUserData(name, photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-[calc(100vh-274px)] flex justify-center items-center border rounded-3xl">
      <div className="bg-base-200 p-10 rounded-lg space-y-5 w-full lg:w-1/3">
        <form onSubmit={handleCreateUser} className="space-y-5">
          <p className="text-4xl font-bold text-center mb-6">Register</p>
          <label className="input-group">
            <span className="w-24">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-3/4"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">Email</span>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="input w-3/4"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">Password</span>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="input w-3/4"
              required
            />
          </label>
          <label className="input-group">
            <span className="w-24">PhotoURL</span>
            <input
              type="text"
              name="photo"
              placeholder="www.example.com/photo.jpg"
              className="input w-3/4"
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
        <p className="text-error text-center font-semibold">{error}</p>
      </div>
    </div>
  );
};

export default Register;
