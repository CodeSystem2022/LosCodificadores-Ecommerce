import {
  createBrowserRouter
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Products } from "../pages/Products";
import { Error404 } from "../pages/Error404";
import { Developing } from "../pages/Developing";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />,
    errorElement: <Error404 />
  },
  {
    path: "/",
    element: <Home />
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
  {
    path: "/contacto",
    element: <Developing />,
    errorElement: <Error404 />
  },
  {
    path: "/metodos_pago",
    element: <Developing />,
    errorElement: <Error404 />
  },
  {
    path: "/envios",
    element: <Developing />,
    errorElement: <Error404 />
  },
  {
    path: "/armapc",
    element: <Developing />,
    errorElement: <Error404 />
  }
]);