import {
  createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";
import { Error404 } from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: "/productos/:categoria?",
    element: <Products />,
    errorElement: <Error404 />
  },
  {
    path: "/producto/:id",
    element: <Product />,
    errorElement: <Error404 />
  },
]);