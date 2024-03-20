"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import arrowright from "../public/arrow-right-01.svg";
import { Button } from "@nextui-org/react";

export default function NavBar() {
  return (
    <div className="absolute bg-[#F6FBFF] px-2 md:px-32  py-4 w-full z-50 bg-none">
      <div className="flex items-center justify-between px-3 py-1.5 ">
        <Link href="/">
          <h1>
            <Image src={logo} alt="logo" width={200} height={30} />
          </h1>
        </Link>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-black">
          <span className="flex items-center  gap-2 relative px-5 sm:px-4 py-1 sm:py-3 transition-all ease-in text-sm duration-75 ">
            Connect
            <Image src={arrowright} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
