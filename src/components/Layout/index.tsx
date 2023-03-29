import { Roboto } from "next/font/google";
import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`ml-auto w-full ${roboto.className}`}>
      <Navbar />
      <main className="relative flex flex-col">{children}</main>
      <footer className="flex h-12 items-end justify-center text-xs font-medium text-neutral-500"><span className="mt-1">Made with ♥️ in Turkey</span></footer>
    </div>
  );
};

export default Layout;
