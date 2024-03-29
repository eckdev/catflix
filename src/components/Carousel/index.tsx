import emblaCarouselAutoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { DotButton } from "./CarouselNavigations";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

type PropType = {
  options?: EmblaOptionsType;
  videos: Record<string, any>;
};

const Carousel: React.FC<PropType> = (props) => {
  const { options, videos } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    emblaCarouselAutoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {videos.map((item: IRecord, index: number) => (
              <div className="embla__slide" key={index}>
                <Image
                  className="embla__slide__img"
                  src={item.snippet.thumbnails.high.url}
                  width={800}
                  height={200}
                  quality={100}
                  alt={item.snippet.title}
                  priority
                />

                <div className="embla_text">
                  <h1 className={`embla_title`}>{item.snippet.title}</h1>
                  <p className={`embla_paragraph`}>
                    {item.snippet.description}
                  </p>
                  <Link href={`/video/${item.id.videoId}`}>
                    <button
                      type="button"
                      className="text-white flex items-center bg-red-600 cursor-pointer p-4 rounded-md text-base h-12 shadow-sm play-button"
                      aria-label="play button"
                    >
                      Play{" "}
                      <PlayCircleIcon className="hover:animate-bounce h-10 w-10 ml-1 text-white" />
                    </button>
                  </Link>
                </div>
                <div className="embla_slider_overlay">
                  <div className="overlay_item_left"></div>
                  <div className="overlay_item_bottom"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="embla_dots_container">
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  selected={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
