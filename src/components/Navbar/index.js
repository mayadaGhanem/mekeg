'use client';
import React, { useState } from 'react'
import LeftNavbar from './leftNavbar'
import RightNavbar from './RightNavbar'
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className='bg-white fixed w-full'>
    <div className={`grid grid-cols-12 ${isOpen?'grid-rows-2':'grid-rows-1'} lg:grid-rows-1 py-1 lg:py-7 place-items-center`}>
      <div className='col-span-3 lg:col-span-1 row-span-1 order-1 '>

    <Link href="https://mekeg.org/" className="flex items-center px-1 lg:px-0">
          <div className="h-12 w-l relative   lg:mx-2 ">
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              layout="fill"
              />
          </div>
        </Link>
              </div>



 
<RightNavbar isOpen={isOpen} handleClick={handleClick}/> 

<LeftNavbar isOpen={isOpen}/> 

    </div>
    </div>
  )
}
