import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Suggestions from "@/components/Suggestions";
import { GetServerSideProps } from "next";
import axios from "@/utils/axios";
import shuffle from '@/utils/shuffle'

const OPTIONS: EmblaOptionsType = {};
export default function Home({videos}:Record<string,any>) {
  return (
    <>
      <Carousel options={OPTIONS} videos={videos.slice(0,5)} />
      <Suggestions videos={videos.slice(5,15)} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const videos = await axios.get('search',{
    params: {
        q: 'cat tv for cats to watch',
        maxResults: 25
    }
  })
  const data = shuffle(videos.data.items)

  return {
    props: {
      videos: videos.data.items
    }
  }
}