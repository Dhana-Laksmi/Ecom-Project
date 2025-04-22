import ReactDOM from "react-dom/client";
import "./index.css";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import ProductLayout from "./components/ProductLayout";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorLayout } from "./components/ErrorLayout";
import { ProductDetail } from "./components/ProductDetail";

const AppLayout = () => {
  return (
    <>
      {/* <Hero /> */}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/",
        element: <AppLayout />,
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      }
    ],

    errorElement: <ErrorLayout />,  // This will be shown when there is an error in the route
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
