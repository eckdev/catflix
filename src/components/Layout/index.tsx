import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="ml-auto w-full">
      <Navbar />
      <>{children}</>
      <footer className="flex h-12 items-end justify-center text-xs font-medium text-neutral-500"><span className="mt-1">Made with ♥️ in Turkey</span></footer>
    </div>
  );
};

export default Layout;
