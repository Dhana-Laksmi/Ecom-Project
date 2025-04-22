import React from "react";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

function ProductLayout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const productData = await res.json();
      console.log(productData);
      setData(productData.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section cla ssName="product-layout">
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                desc={item.description}
                image={item.thumbnail}
                rating={item.rating}
                discount={item.discountPercentage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ProductLayout;
