import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex fixed w-full justify-between top-0 p-0 z-40 navbar-background">
      <div className="w-1/2 h-full navbar-wrapper">
        <div className="ml-6 mt-4 h-16 navbar-container">
          <Image
            src="/cat.png"
            alt="Cat Logo"
            width={100}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
