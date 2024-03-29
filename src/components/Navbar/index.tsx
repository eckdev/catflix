import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollPosition } from "./useNavbarPosition";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  const scrollPosition = useScrollPosition();

  return (
    <div className={classNames(
      scrollPosition > 0 ? 'bg-black pb-2' : '',
      'flex fixed w-full justify-between top-0 p-0 z-40 navbar-background',
    )}>
      <div className="w-1/2 h-full navbar-wrapper">
        <div className="ml-6 mt-4 h-16 navbar-container flex items-center">
          <Image
            src="/cat.png"
            alt="Cat Logo"
            width={100}
            height={80}
            priority
            className="object-cover logo"
          />
          <span
            className={`text-red-600 text-5xl bold mr-6 catflix-text ${bebasNeue.className}`}
          >
            CATFLIX
          </span>
          <ul className="flex m-0 p-0 items-center">
            <li className="ml-6 navigation-tab">
              <Link
                className={router.pathname === "/" ? "current" : ""}
                href={"/"}
              >
                Home
              </Link>{" "}
            </li>
            <li className="ml-6 navigation-tab">
              <Link
                className={router.pathname === "/birds" ? "current" : ""}
                href={"/birds"}
              >
                Birds
              </Link>{" "}
            </li>
            <li className="ml-6 navigation-tab">
              <Link
                className={router.pathname === "/fish" ? "current" : ""}
                href={"/fish"}
              >
                Fish
              </Link>
            </li>
            <li className="ml-6 navigation-tab">
              <Link
                className={router.pathname === "/games" ? "current" : ""}
                href={"/games"}
              >
                Games
              </Link>
            </li>
            <li className="ml-6 navigation-tab">
              <Link
                className={router.pathname === "/facts" ? "current" : ""}
                href={"/facts"}
              >
                Facts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
