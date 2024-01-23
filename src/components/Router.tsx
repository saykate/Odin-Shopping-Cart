import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.tsx";
import Cart from "./Cart/Cart.tsx";
import Shop from "./Shop/Shop.tsx";
import Home from "./Home/Home.tsx";
import ErrorPage from "./ErrorPage.tsx";


const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
