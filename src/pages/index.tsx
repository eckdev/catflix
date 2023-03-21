import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
}
