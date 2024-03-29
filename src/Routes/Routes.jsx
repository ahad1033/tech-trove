import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SignIn from "../Pages/SignIn/SignIn";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Cart from "../Pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <AllProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);
