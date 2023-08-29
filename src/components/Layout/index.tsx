import { Roboto } from "next/font/google";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catflix",
  description:
    "Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform.Free Streaming for cats. Catflix",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/svg+xml",
    },
  ],
  openGraph: {
    title: "Catflix",
    description:
      "Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform.Free Streaming for cats. Catflix",
    url: "https://catfliks.com",
    type: "website",
  },
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`ml-auto w-full ${roboto.className}`}>
      <Navbar />
      <main className="relative flex flex-col">{children}</main>
      <footer className="flex h-12 items-center justify-center text-xs font-medium text-neutral-500 py-3">
        <Link
          href="https://github.com/eckdev/catflix"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
          className="hover:opacity-80 mr-4"
        >
          <svg
            className="text-white h-5 w-5 inline-block"
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 1024 1024"
          >
            <path d="M512 0C229.1 0 0 229.1 0 512c0 226.6 146.6 417.9 350.1 485.8 25.6 4.5 35.2-10.9 35.2-24.4 0-12.2-0.6-52.5-0.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-0.6-33.9 40.3-0.6 69.1 37.1 78.7 52.5 46.1 77.4 119.7 55.7 149.1 42.2 4.5-33.3 17.9-55.7 32.6-68.5-113.9-12.8-233-57-232.9-252.8 0-55.7 19.8-101.8 52.5-137.6-5.1-12.8-23-65.3 5.1-135.7 0 0 42.9-13.4 140.8 52.5 41-11.5 84.5-17.3 128-17.3 43.5 0 87 5.8 128 17.3 97.9-66.6 140.8-52.5 140.8-52.5 28.2 70.4 10.2 122.9 5.1 135.7 32.6 35.8 52.5 81.3 52.5 137.6 0 196.5-119.7 240-233.6 252.8 18.6 16 34.6 46.7 34.5 94.7 0 68.5-0.6 123.5-0.6 140.8 0 13.4 9.6 29.4 35.2 24.4A512.8 512.8 0 0 0 1024 512c0-282.9-229.1-512-512-512z"></path>
          </svg>
        </Link>
        <Link
          href="https://instagram.com/catflikscom"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <svg
            viewBox="0 0 32 32"
            width={32}
            height={32}
            className="text-white h-6 w-6 inline-block"
            stroke="currentColor"
            fill="currentColor"
          >
            <path d="M27.9 11.1a8.7 8.7 0 0 0-0.5-3 6.1 6.1 0 0 0-3.5-3.5 8.8 8.8 0 0 0-3-0.6c-1.3-0.1-1.7-0.1-4.9 0s-3.7 0-4.9 0a8.8 8.8 0 0 0-3 0.6 6.1 6.1 0 0 0-3.5 3.5 8.7 8.7 0 0 0-0.5 2.9c-0.1 1.3-0.1 1.7-0.1 5s0 3.7 0.1 4.9c0 1 0.2 2 0.5 2.9a6.1 6.1 0 0 0 3.5 3.6 8.8 8.8 0 0 0 3 0.6c1.3 0.1 1.7 0.1 4.9 0s3.7 0 4.9 0a8.8 8.8 0 0 0 3-0.6 6.2 6.2 0 0 0 3.5-3.5c0.3-0.9 0.5-1.9 0.5-2.9 0.1-1.3 0.1-1.7 0.1-5 0-3.3 0-3.7-0.1-4.9z m-11.9 11c-3.4 0-6.2-2.8-6.2-6.1s2.8-6.2 6.2-6.2a6.2 6.2 0 0 1 0 12.3z m6.4-11.1a1.4 1.4 0 0 1-1.4-1.4 1.4 1.4 0 1 1 2.8 0c0 0.8-0.6 1.4-1.4 1.4z" />
            <path d="M16 16m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
          </svg>
        </Link>
      </footer>
      <Analytics />
    </div>
  );
};

export default Layout;
