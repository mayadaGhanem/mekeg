import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Statistics() {
  return (
    <div className="hidden lg:flex justify-between items-center  bg-primary w-full h-[137px]">
      <div className="w-1/3 bg-primary  py-4.5 px-2   ">
        <Link href="https://mekeg.org/">
          <Image src="/meke2.png" alt="meke logo" width={"295"} height={"84"} />
        </Link>
      </div>
      <div className="w-2/3 bg-[url('/secondary.png')] bg-no-repeat flex justify-around items-center text-center h-full bg-cover ">
        <div className="flex flex-col gap-1">
          <h2>21</h2>
          <h4 className="font-medium text-white">Year</h4>
        </div>

        <div className="flex flex-col gap-1">
          <h2>$866M</h2>
          <h4 className="font-medium text-white"> Dollar</h4>
        </div>

        <div className="flex flex-col gap-1">
          <h2>104M</h2>
          <h4 className="font-medium text-white">
            Overall Services
          </h4>
        </div>

        <div className="flex flex-col gap-1">
          <h2>35,485</h2>
          <h4 className="font-medium text-white">Project</h4>
        </div>

        <div className="flex flex-col gap-1">
          <h2>55+</h2>
          <h4 className="font-medium text-white">
            Countries
          </h4>
        </div>
      </div>
    </div>
  );
}
