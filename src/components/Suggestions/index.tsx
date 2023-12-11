import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import HorizontalScroll from "react-basic-horizontal-scroll";

type Props = {
  videos: Record<string, any>;
  title: string;
  id: string;
};

const Suggestions = (props: Props) => {
  const { videos, id, title } = props;
  return (
    <div className="pl-20 pr-20 related-videos">
      <div className="flex items-center justify-between pb-3">
        <span className="mb-4 font-bold text-lg relative text-left text-white uppercase">
          {title}
        </span>
      </div>

      <div className="relative flex items-center mb-8">
        <div
          id={id}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <HorizontalScroll>
            {videos.map((item: Record<string, any>, index: number) => (
              <Link href={`/video/${item.id.videoId}`} key={index}>
                <Image
                  className="w-[348px] h-[196px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  width={348}
                  height={196}
                  loading={"lazy"}
                />
              </Link>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
