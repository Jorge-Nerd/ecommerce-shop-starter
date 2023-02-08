import React from "react";
import { useContext } from "react";
import Product from "../components/Product";

import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  //Import product from context
  const { product } = useContext(ProductContext);
  console.log(product);

  // Get only MEN'S and WOMEN'S Clothing Category
  const menAndWomenProduct = product.filter((product) => {
    return (
      product.category.includes("men's clothing") ||
      product.category.includes("women's clothing")
    );
  });
  console.log(menAndWomenProduct);
  return (
    <div>
      <section className="py-16 ">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-auto md:mx-0 max-w-sm md:max-w-none">
            {menAndWomenProduct.map((item) => {
              return <Product menAndWomenProduct={item} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
