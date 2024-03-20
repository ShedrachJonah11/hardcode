"use client";
import * as React from "react";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import bg2 from "../public/02.svg";
import bg1 from "../public/01.svg";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <NavBar />

        <section>
          <div className="relative bg-[#0E0C15] flex flex-col h-screen  justify-center items-center">
            {/* Background image */}
            <div className="absolute inset-0 z-0 mb-52">
              <Image src={bg2} alt="bg" className="w-full h-full" />
            </div>
          </div>
        </section>
      </main>
    </NextUIProvider>
  );
}
