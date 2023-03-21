import emblaCarouselAutoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import React, { useState, useEffect, useCallback } from "react";
import { DotButton } from "./Dots";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <Image
                  className="embla__slide__img"
                  src={
                    "https://cdn.ssportplus.com/1/3165/s1GZZhTd3T57/s1GZZhTd3T57.jpg"
                  }
                  width={800}
                  height={200}
                  quality={100}
                  alt="Your alt text"
                />
                <div className="embla_text">
                  <h1 className={`${roboto.className} embla_title`}>
                    Test Text
                  </h1>
                  <p className={`${roboto.className} embla_paragraph`}>
                    Test Desc
                  </p>
                </div>
                <div className="embla_slider_overlay">
                  <div className="overlay_item_left"></div>
                  <div className="overlay_item_bottom"></div>
                </div>
              </div>
            ))}
          </div>
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
    </>
  );
};

export default Carousel;
