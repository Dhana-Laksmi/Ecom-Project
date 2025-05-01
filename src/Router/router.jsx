import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import HeroSection from "../components/HeroSection";
import ProductLayout from "../components/ProductLayout";
import { ProductDetail } from "../components/ProductDetail";
import { BestSellers } from "../components/BestSellers";
import { ErrorLayout } from "../components/ErrorLayout";
import { Suspense } from "react";

export const router = createBrowserRouter([
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
        },
         {
          path: "/bestSellers",
          element: (<Suspense fallback={"Loading..."}>
            <BestSellers/>
          </Suspense>),
        },
      ],
  
      errorElement: <ErrorLayout />, // This will be shown when there is an error in the route
    },
  ]);
  