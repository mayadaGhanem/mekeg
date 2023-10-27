"use client";
import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from 'next/image';

export default function TrustedPartners() {
  return (
    <div className="w-full bg-white">
    <div className="hidden lg:flex relative w-full">
    <div className='flex justify-center items-center flex-col py-3 p-24 w-full h-full'>
      <h1>
      OUR TRUSTED PARTNERS
      </h1>
      <span className="text-body text-sm pt-2.5 pb-2 text-center ">
      Because reliability is what we bring to the table, we handpick our partners with a <br/>sharp eye for global credibility.
      </span>
     
     


      <Carousel
      className="rounded-xl w-3/4"
     nextArrow={()=><div/>}
     prevArrow={()=><div/>}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute pt-2 bottom-0 left-2/4   flex -translate-x-2/4 gap-1">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-1 bg-primary" : "w-1.5 bg-border"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
     <div className='flex justify-between gap-2 w-full p-2'> 
     <Image
        src="/slide4.png"
        alt="image 1"
        width={"286"}
        className=' grayscale'

        height={"137"}
      />
     <Image
        src="/slide3.png"
        alt="image 1"
        width={"286"}
        height={"137"}
        className=' grayscale'

      />
    
          <Image
        src="/slide1.png"
        alt="image 1"
        width={"286"}
        height={"137"}
        className=' grayscale'
      />
     <Image
        src="/slide2.png"
        alt="image 1"
        width={"286"}
        height={"137"}
        className=' grayscale'

      />
     </div> 
    </Carousel>


      </div>
      </div>
      </div>
  )
}
