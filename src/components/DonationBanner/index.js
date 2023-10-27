"use client";
import Image from "next/image";
import React from "react";
import Cart from "./cart.svg";
export default function DonationBanner() {
  return (
    <div className="relative">
      <Image
        src={"/donation.png"}
        className="z-0 !relative"
        layout={"fill"}
        objectFit={"contain"}
      />
      <div
        className={`w-full hidden lg:flex flex-col  items-center absolute top-0 py-2 justify-between  `}
      >
        <h4> Share With us in Sabah Elkheir Campaign </h4>
        <span className="text-black text-sm pt-3.5  py-1">
          Donate Daily and change more people life
        </span>
        <div className=" flex justify-center items-center h-2 gap-1">
          <input
            type="number"
            className="h-full w-40 focus::border-none focus::focus:ring-0  focus:outline-none  rounded px-1 text-deactive"
            placeholder="0.00 EGP"
          />
          <button className="flex bg-secondary px-4.5 h-full text-white items-center justify-center rounded text-sm gap-1.5">
            <Cart className={"w-1 h-1"} />
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
