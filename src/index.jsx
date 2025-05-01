import ReactDOM from "react-dom/client";
import "./index.css";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import ProductLayout from "./components/ProductLayout";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorLayout } from "./components/ErrorLayout";
import { ProductDetail } from "./components/ProductDetail";
import Footer from "./components/Footer";
import UserStore from "./store/UserStore";
import {lazy, Suspense } from "react";
import { BestSellers } from "./components/BestSellers";
import { router } from "./Router/router";

//const BestSellers = lazy(()=>import ("./components/BestSellers"))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
