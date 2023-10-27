"use client";

import React, { useState } from "react";

export default function LeftNavbar( {isOpen}) {
  
  const navBarItemStyle =
    "flex items-center justify-between w-full   text-body text-base hover:text-secondary";
  return (
    <nav className={`${isOpen?'  w-full':'hidden'} lg:inline bg-white z-20 border-gray-200 col-span-12 lg:col-span-7  row-span-1 order-3 lg:order-2 self-center justify-self-start`}>
     
          <ul className={`${isOpen?'absolute  w-full bg-white':''} flex flex-col p-0 font-medium lg:flex-row gap-2 lg:gap-1 items-center py-1 lg:py-0`}>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className={navBarItemStyle}
              >
                <span className="font-medium">Discover </span>
                <Arrow />
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
                ></div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className={navBarItemStyle}
                >
                <span className="font-medium">About us </span>
                <Arrow />
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
              ></div>
            </li>{" "}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className={navBarItemStyle}
                >
                <span className="font-medium">Donation </span>
                <Arrow />
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
              ></div>
            </li>{" "}
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className={navBarItemStyle}
              >
                <span className="font-medium">Media </span>
                <Arrow />
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44  "
                ></div>
            </li>{" "}
            <li>
              <a href="#" className={navBarItemStyle}>
                Contact us
              </a>
            </li>
          </ul>
      </nav>
   );
}

const Arrow = () => {
  return (
    <svg
    className="w-2.5 h-1.5 ml-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m1 1 4 4 4-4"
      />
    </svg>
  );
};
