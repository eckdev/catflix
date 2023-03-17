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
    </div>
  );
};

export default Layout;
