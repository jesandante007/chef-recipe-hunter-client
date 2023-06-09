import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ChefRecipes from "../pages/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://chef-recipe-hunter-server-kappa.vercel.app/chefs')
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-kappa.vercel.app/chef/${params.id}`)
            }
        ]
    }
]);

export default router;