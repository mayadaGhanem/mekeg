"use client";
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image';

export default function BannerCarousel() {
  return (
    <div className="w-full">
   


      <Carousel
      className="rounded-xl w-full"
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
        src="/egy.png"
        alt="image 1"
        layout="fill"
        className="z-0 !relative"
        objectFit="contain"
      /> 
     </div> 
    </Carousel>


      </div>
   )
}
