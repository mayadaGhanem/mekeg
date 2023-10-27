"use client";
import React from "react";
import Cart from "./cart.svg";
import Frame from "./Frame.svg";
 export default function HeroSection() {
  return (
    <div className="w-full bg-white">
    <div className="hidden lg:flex relative w-full">
 
     <div  className={`px-2 w-2/5 flex flex-col  justify-center py-2 z-10   `}
      >
        <span className="text-secondary font-semibold text-sm ">
          Intractable cases
        </span>
        <h3>An urgent humanitarian case (Equipping Schools)</h3>
        <span className="text-secondary font-semibold text-sm pt-3.5 ">
          {" "}
          AN URGENT HUMANITARIAN CASE (EQUIPPING SCHOOLS)
        </span>
        <span className="text-body text-sm   py-4.5">
          Abu Ghassoun Basic Education School serves approximately 175 students
          yearly, but the school suffers from a lack of equipment and resources.
          With your donation, we will be able to improve the school and provide
          the necessary equipment and tools for our children to continue their
          education properly. The cost of developing educational facilities for
          the classrooms is EGP136,400.
        </span>
        <div className=" flex justify-center items-center h-2 gap-1 self-start">
          <input
            type="number"
            className="h-full w-40 focus::border-none focus::focus:ring-0  focus:outline-none  rounded px-1 text-deactive bg-[#E6E8EC]"
            placeholder="0.00 EGP"
          />
          <button className="flex bg-secondary px-4.5 h-full text-white items-center justify-center rounded text-sm gap-1.5">
            <Cart className={"w-1 h-1"} />
            Donate
          </button>
        </div>
      </div>
      <div className="linear-bg absolute  h-full w-1/3 left-1/3"/>
 
      <div className="w-2/3 bg-no-repeat bg-[url('/class.png')] bg-cover
  "/>
      
      <div className="absolute bottom-2 w-full flex justify-end px-32">
      <Frame className={'r-0'}/>
   
      </div>
     
    </div>
      <div className="bottom-0 w-full">
       <div className="flex justify-between items-center  bg-primary">
        <div className="w-3/4 bg-primary   ">
        <span className="text-white  font-semibold text-sm px-2" >
        136400 EGP            </span>
        </div>
        <div className="w-1/4 bg-secondary px-2 rounded-l-[100px] text-center">
            <span className="text-white  font-semibold text-sm   ">
            136400 EGP
            </span>
        </div>

      </div>
      </div>
    </div>
  );
}
