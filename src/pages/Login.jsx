import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-274px)] flex justify-center items-center border rounded-3xl">
      <div className="bg-base-200 p-10 rounded-lg space-y-5 w-full lg:w-1/3">
        <form onSubmit={handleSignIn} className="space-y-5">
          <p className="text-4xl font-bold text-center mb-6">Login</p>
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
          <input
            type="submit"
            value="Submit"
            className="input btn btn-info normal-case w-full"
          />
          <div className="divider">or</div>
        </form>
        <div className="flex gap-3">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-warning w-1/2"
          >
            Google
          </button>
          <button onClick={handleGithubSignIn} className="btn btn-black w-1/2">
            Github
          </button>
        </div>
        <p className="text-center">
          Don't have an account?
          <Link to="/register" className="link-info ms-2 font-semibold">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
