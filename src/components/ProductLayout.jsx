import React from "react";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import useFetchData from "../Hooks/useFetchData";
import { v4 as uuidv4 } from 'uuid';

const productWithCategory = (Component) => {
  const WithCategory= (props)=>{
    const category = props.category
    return (
      <div className="relative">
        <p className="absolute top-0 left-0 p-5 mt-2 ml-2 me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
          {category.toUpperCase()} </p>
        <Component {...props} />
      </div>
    );
  };
  return WithCategory; 
};

function ProductLayout() {
  //const [data, setData] = useState([]);

  const { data, isLoading } = useFetchData();
  // if(isLoading) {
  //   return (
  //     <div>
  //       No data found
  //     </div>
  //   );
  // }
  //const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const productData = await res.json();
  //     console.log(productData);
  //     setData(productData.products);
  //     setIsLoading(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
const ProductWithCategory=productWithCategory(ProductCard);
  return (
    <section cla ssName="product-layout">
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {data.map((item) => {
            return (
              <>
                <ProductWithCategory
                  key={uuidv4()}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  desc={item.description}
                  image={item.thumbnail}
                  rating={item.rating}
                  discount={item.discountPercentage}
                  category={item.category}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ProductLayout;
