import React from "react";
import Search from "./Search.svg";
import Calculator from "./bi_calculator-fill.svg";
import Profile from "./Profile.svg";
import Browse from "./Browse.svg";
import Menu from "./menu.svg";
import Cart from "./cart.svg";

export default function RightNavbar({handleClick}) {
  const iconStyle='lg:text-body  hover:text-secondary text-primary  '
  return (
    <div className=" px-1 lg:px-2 col-span-9 lg:col-span-4 row-span-1    order order-2 lg:order-3 justify-self-end">
    <div className="flex gap-1 lg:gap-2  ">
      <button >
        <Search  className={iconStyle}/>
      </button>

      <button className=" lg:bg-primary hover:text-secondary py-3.5 lg:px-4.5 rounded text-primary lg:text-background flex items-center justify-center ">
        <Calculator  className={ 'hover:text-secondary text-primary lg:text-white'} />
        <span className="font-medium text-sm pl-2.5">Zakat</span>
      </button>
      <button >
        <Browse  className={iconStyle}  />
      </button>
      <button >
        <Profile   className={iconStyle}   />
      </button>
      <button >
        <Cart   className={iconStyle}   />
      </button>
  
<button  type="button" className="flex lg:hidden bg-primary  p-0.5 w-3 h-3 justify-center  items-center 
  " onClick={handleClick}>
    <Menu className="text-white"/>
    </button>
     </div>
     </div>
  );
}
