"use client";
import {
   Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Cart from "./cart.svg";
import Image from "next/image";
import Arrow from './arrow.svg';
import AngelDown from './angelDown.svg';
export default function Products() {
  const data = [
    {
      id: 1,
      img: "/school.png",
      title: "School Bags",
      price:'1000 EGP'
    },

    {
      id: 2,
      img: "/clothes.png",
      title: `Winter Clothes`,
    price:'350 EGP'

 
    },
    {
      id: 3,
      img: "/box.png",
      title: `El-Kheir Box`,
    price:'320 EGP'

    },
    {
      id: 4,
      img: "/meat.png",
      title: "Sadaqa Meat",
      price:'1000 EGP'
    },

    {
      id: 5,
      img: "/baby.png",
      title: `Aqeeqah`,
    price:'350 EGP'

 
    },
    {
      id: 6,
      img: "/buffalo.png",
      title: `Redemption buffalo`,
    price:'320 EGP'

    }
   
   
  ];
  return (
    <div className="w-full px-2 py-24">
      <div className="flex  flex-col relative w-full justify-center items-center">
        <div className="flex  flex-col  justify-center items-center w-full h-full">
          <h1>Our Products </h1>
          <span className="text-body text-sm pt-2.5 pb-2 text-center ">
            Because reliability is what we bring to the table, we handpick our
            partners with a <br className="hidden lg:block"/>
            sharp eye for global credibility..
          </span>
        </div>
        <div className="grid grid-cols-12 w-full gap-1">
          {data.map(({ id, title, price, img }) => (
           <Card className="col-span-12 lg:col-span-4   flex  flex-col lg:flex-row p-1 lg:p-0 gap-1" key={id}>
           <CardHeader
             shadow={false}
             floated={false}
             className="m-0 w-full lg:w-2/5   rounded-r-none"
           >
             <Image
                  src={img}
                  alt={title ?? "product img"}
                  layout="fill"
                  className="z-0 !relative"
                  objectFit="cover"
                />
           </CardHeader>
           <CardBody className="!p-0 flex justify-around flex-col">
           <div className="flex justify-between  items-center">

             <Typography variant="h6"  className=" flex-1 ">
               {title}
             </Typography> 
             <IconButton variant="text" className="flex-1 "> 
     <Arrow/>
    </IconButton>
            </div>
            <span className="text-secondary">
              {price}
            </span>
              <div className=" flex     h-2 gap-1 self-start">
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
           </CardBody>
         </Card>
          ))}
        </div> 
      </div>
    </div>
  );
}

                