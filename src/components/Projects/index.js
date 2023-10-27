import React from "react";
import Heart from "./heart.svg";
import Hand from "./hand.svg";
import Education from "./education.svg";
export default function Projects() {
  return (
    <div className={"hidden lg:block py-24"}>
      <figure className="relative  w-full">
        <img
          className="h-full w-full  object-cover object-center"
          src="/bg.png"
          alt="nature image"
        />
        <figcaption className="py-2 top-0 px-2 absolute flex h-full w-full ">
          <div className="flex flex-col justify-around h-full  w-1/2">
            <Heart />
            <h1 className="text-white">Health Projects</h1>
            <h5 className="text-white font-normal">
              Developing the health system for treating and controlling diseases
              in Egypt
            </h5>
            <span className="text-secondary">Number Directed Services</span>
            <span className="text-white text-5xl font-semibold">11,136297</span>
          </div>
          <div className="relative w-2/5 flex py-2  justify-between items-center">
            <div className="h-2/3 w-1/3  relative">
              <img
                className="top-10 border-t-[16px] border-[#DE1DBF] w-full h-full object-cover"
                src="/back1.png"
              />
              <div className="absolute flex flex-col top-0 w-full h-full items-center justify-center gap-[12px]">
                <div className="bg-[#DE1DBF] w-[40px] h-[40px] rounded-md flex justify-center items-center">
                  <Hand />
                </div>
                <span>Social Solidarity</span>
                <span>12,515,467</span>
              </div>
            </div>

            <div className=" right-2   h-2/3 w-1/3  relative">
              <img
                className="border-t-[16px] border-[#1DD3DE] h-full w-full object-cover"
                src="/back2.png"
              />
              <div className="absolute flex flex-col top-0 w-full h-full items-center justify-center gap-[12px]">
                <div className="bg-[#1DD3DE] w-[40px] h-[40px] rounded-md flex justify-center items-center">
                  <Education />
                </div>
                <span>Social Education</span>
                <span>12,515,467</span>
              </div>
            </div>
            <img
              className="absolute left-[22%] h-full top-0 "
              src="/top.png"
              alt="Workplace"
            />
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
