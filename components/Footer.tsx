import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";

function Footer() {
  const date = new Date();

  return (
    <footer className="bg-[#F6FBFF] px-4 md:px-32 py-6 w-full z-50">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center md:justify-start">
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>

        <p className="font-light text-center md:text-left md:ml-6 mt-4 md:mt-0">
          Need support? Contact us: support@hardcode.oi
        </p>

        <p className="font-light text-center md:text-left md:ml-6 mt-4 md:mt-0">
          {" "}
          <span className="text-xl">&copy;</span> {date.getUTCFullYear()}{" "}
          Hardcode All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
