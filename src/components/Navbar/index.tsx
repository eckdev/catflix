import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="flex fixed w-full justify-between top-0 p-0 z-40 navbar-background">
      <div className="w-1/2 h-full navbar-wrapper">
        <div className="ml-6 mt-4 h-16 navbar-container flex items-center">
          <Image
            src="/cat.png"
            alt="Cat Logo"
            width={100}
            height={80}
            priority
            className="object-cover"
          />
          <span className={`text-red-600 text-5xl bold ${bebasNeue.className}`}>CATFLIX</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
