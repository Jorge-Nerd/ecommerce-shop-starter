import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

//import React Icosn
import { BsPlus, BsEyeFill } from "react-icons/bs";

//import cart context
import { CartContext } from "../contexts/CartContext";

const Product = ({ menAndWomenProduct }) => {
  // Desctructuring cart context
  const { handleCart } = useContext(CartContext);
  // Desctructuring product
  const { id, image, title, description, rating, category, price } =
    menAndWomenProduct;
  return (
    <div key={id}>
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4
      relative overflow-hidden group transition cursor-pointer"
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[200px] mx auto flex justify-center items-center">
            {/* image */}
            <img
              src={image}
              alt="product"
              className="max-h-[160px] group-hover:scale-110 transition ease-in-out duration-300"
            />
          </div>
        </div>
        {/** buttons */}
        <div
          className="absolute top-6 -right-11  p-2 rounded
        flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:right-5 
        transition-all duration-300 group-hover:opacity-100 "
        >
          <button onClick={() => handleCart(id,title)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/:${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
        {/** category & title & price*/}
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default Product;
