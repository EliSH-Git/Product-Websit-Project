import { createBrowserRouter } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Home from "../components/home/Home";
import Products from "../components/products/Products/Products";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import About from "../components/About";
import SingleProduct from "../components/products/singleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
