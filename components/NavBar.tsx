"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import arrowright from "../public/arrow-right-01.svg";
import { Button } from "@nextui-org/react";

export default function NavBar() {
  return (
    <div className="absolute bg-[#0C0B13] px-4 md:px-96 py-4 w-full z-50 bg-none">
      <div className="flex border bg-[#0F0C17] border-slate-900 rounded-xl items-center justify-between px-3 py-1.5 ">
        <Link href="/">
          <h1>
            <Image src={logo} alt="logo" width={125} height={30} />
          </h1>
        </Link>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br to-[#8D1EA2] from-[#090EDB] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
          <span className="flex items-center  gap-2 relative px-5 sm:px-12 py-1 sm:py-2 transition-all ease-in text-sm duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
            Connect
            <Image src={arrowright} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
