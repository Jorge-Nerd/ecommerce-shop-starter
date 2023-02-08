import React from "react";

const Product = ({ menAndWomenProduct }) => {
  const { id, image, title, description, rating, category } =
    menAndWomenProduct;
  return (
    <div key={id}>
      <div>
        <div className="w-full h-[300px] bg-pink-200" >
          <p>{title}</p>
          <div>
            <img src={image} alt="product" className="w-[200px]" />
          </div>
          
        </div>
        ;
      </div>
    </div>
  );
};

export default Product;
