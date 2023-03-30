import { ChevronLeftIcon, ChevronRightIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  videos: Record<string, any>;
};

const Suggestions = (props: Props) => {
  const { videos } = props;
  return (
    <>
    <span className=" pl-10 mb-8 font-bold text-lg relative text-left text-white uppercase">Related Videos</span>
    <div className="relative flex items-center"> 
      <button
        className="opacity-50 cursor-pointer hover:opacity-100"
        onClick={() => {
          let slider = document.getElementById("slider") as HTMLElement;
          slider.scrollLeft = slider.scrollLeft - 500;
        }}
      >
        <ChevronLeftIcon className="h-10 w-10 text-white" />
      </button>
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {videos.map((item:Record<string,any>, index:number) => (
          <Link href={`/video/${item.id.videoId}`} key={index}>
            <Image
              className="w-[220px] h-[150px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={220}
              height={170}
              
            />
          </Link>
        ))}
      </div>
      <button
        className=""
        onClick={() => {
          let slider = document.getElementById("slider") as HTMLElement;
          slider.scrollLeft = slider.scrollLeft + 500;
        }}
      >
        <ChevronRightIcon className="h-10 w-10 text-white" />
      </button>
    </div>
    </>
  );
};

export default Suggestions;
