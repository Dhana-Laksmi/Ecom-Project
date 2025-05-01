import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const productData = await res.json();
      console.log(productData);
      setData(productData.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, isLoading };
};

export default useFetchData;
