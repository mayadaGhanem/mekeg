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
export default function IntractableCases() {
  const data = [
    {
      id: 1,
      img: "/man.png",
      title: "An urgent humanitarian case   (Feeding a village)",
      desc: `Many Al-Sahait village,
         Al-Hamoul center, Kafr El Sheikh Governorate, whose people suffer from extreme poverty,
          With your donation, we will be able to deliver food daily for a month to many families
           of our most caring families... Donate now to Feed them.Many Al-Sahait village, Al-Hamoul
            center, Kafr El Sheikh Governorate, whose people suffer from extreme poverty, 
        With your donation, we will be able to deliver food daily for a month to many.`,
    },

    {
      id: 2,
      img: "/lab.png",
      title: `An urgent humanitarian case 
    (C-Arm "X-ray machine")`,
      desc: `Many cases are waiting for one device to carry out operations and surgeries. Your donation will open a door 
    of goodness for an ongoing charity that will save many cases.Donate to purchase a C-Arm mobile X-ray machine 
    to be used in imaging procedures carried out in general surgery, urology, cardiac surgery, orthopedics, and gastroenterology.
    Total cost of the device: 1,500,000`,
    },

    {
      id: 3,
      img: "/class.png",
      title: `An urgent humanitarian case 
    (Equipping Schools)`,
      desc: `Abu Ghassoun Basic Education School serves approximately 175 students yearly,
     but the school suffers from a lack of equipment and resources. With your donation,
      we will be able to improve the school and provide the necessary equipment and tools for our
     children to continue their education properly. The cost of developing educational facilities for the classrooms is EGP136,400.`,
    },
  ];
  return (
    <div className="w-full px-2 py-24">
      <div className="flex  flex-col relative w-full justify-center items-center">
        <div className="flex  flex-col  justify-center items-center w-full h-full">
          <h1>Intractable cases </h1>
          <span className="text-body text-sm pt-2.5 pb-2 text-center ">
            Because reliability is what we bring to the table, we handpick our
            partners with a <br className="hidden lg:block"/>
            sharp eye for global credibility..
          </span>
        </div>
        <div className="flex flex-col lg:flex-row relative w-full gap-[1.5rem]">
          {data.map(({ id, title, desc, img }) => (
            <Card className="w-full lg:w-1/3 pb-2 " key={id}>
              <CardHeader className=" !rounded-none !rounded-t-lg m-0">
                <div className="flex justify-between items-center  bg-primary w-full">
                  <div className="w-3/4 bg-primary   ">
                    <span className="text-white  font-semibold text-sm px-2">
                      136400 EGP{" "}
                    </span>
                  </div>
                  <div className="w-1/4 bg-secondary px-2 rounded-l-[100px] text-center">
                    <span className="text-white  font-semibold text-sm   ">
                      136400 EGP
                    </span>
                  </div>
                </div>
                <Image
                  src={img}
                  alt={title ?? "news img"}
                  layout="fill"
                  className="z-0 !relative"
                  objectFit="cover"
                />
              </CardHeader>
              <CardBody className="!p-1 !pb-2">
                <div className="flex justify-between">

                <Typography variant="h5" className="flex-1 mb-2 !p-0 !text-black">
                  {title}
                </Typography>
                <IconButton variant="text" className="flex-1 "> 
     <Arrow/>
    </IconButton>
                </div>
                <span className="text-body text-sm pb-2">{desc}</span>
              </CardBody>
              <CardFooter className="!p-1  absolute bottom-0  ">
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
              </CardFooter>
            </Card>
          ))}
        </div>
        <button className="text-deactive font-medium  text-sm pt-2 w-36 flex items-center">
            Expand for More
        <AngelDown/>

        </button>
      </div>
    </div>
  );
}
