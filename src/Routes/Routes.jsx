import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SignIn from "../Pages/SignIn/SignIn"

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path:'/aboutus',
          element: <AboutUs />
        }
      ]
    },
    {
      path: 'signin',
      element: <SignIn />
    }
  ])
  