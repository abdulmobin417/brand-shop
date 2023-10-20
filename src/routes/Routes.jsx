import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/Home/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Layouts/Root";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../pages/Home/CarDetails/CarDetails";
import BrandDetails from "../pages/Home/BrandDetails/BrandDetails";
import UpdateCar from "../pages/Home/UpdateCar/UpdateCar";
import MyCart from "../pages/MyCart/MyCart";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sand-two.vercel.app/carDetails/${params.id}`
          ),
      },
      {
        path: "/updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sand-two.vercel.app/carDetails/${params.id}`
          ),
      },
      {
        path: "/brandDetails/:id",
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sand-two.vercel.app/brandDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
