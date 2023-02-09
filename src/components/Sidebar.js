import React from "react";

import { useContext } from "react";
//import Link

import { Link } from "react-router-dom";
//import icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { Fitrash2 } from "react-icons/fi";

//import cart item
import CartItem from "../components/CartItem";

//import sidebar context
import { SideBarContext } from "../contexts/SidebarContext";

//import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const {cart, setCart}=useContext(CartContext);
  const { isOpen, setIsOpen, handleClose } = useContext(SideBarContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full
      shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300
      z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag (0)
          </div>
          {/** icons */}
          <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoIosArrowRoundForward className="text-2xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
