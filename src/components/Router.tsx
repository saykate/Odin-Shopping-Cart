import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.tsx";
import Cart from "./Cart.tsx";
import Shop from "./Shop.tsx";
import ErrorPage from "./ErrorPage.tsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
