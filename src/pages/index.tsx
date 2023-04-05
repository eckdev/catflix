import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Suggestions from "@/components/Suggestions";
import { GetServerSideProps } from "next";
import axios from "@/utils/axios";
import Head from "next/head";

const OPTIONS: EmblaOptionsType = {};
export default function Home({ videos, birds,fish }: Record<string, any>) {
  return (
    <>
    <Head>
      <title>Catfliks | Free streaming for cats</title>
    </Head>
      <Carousel options={OPTIONS} videos={videos.slice(0, 5)} />
      <Suggestions
        videos={videos.slice(5, 15)}
        title="Related Videos"
        id="related_videos"
      />
      <Suggestions videos={birds} title="Birds" id="birds" />
      <Suggestions videos={fish} title="Fish" id="fish" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const mainVideos = await axios.get("search", {
    params: {
      q: "cat tv for cats to watch",
      maxResults: 25,
    },
  });

  const birds = await axios.get("search", {
    params: {
      q: "cat tv for cats to watch birds",
      maxResults: 10,
    },
  });

  const fish = await axios.get("search", {
    params: {
      q: "cat tv for cats to watch fish",
      maxResults: 10,
    },
  });

  return {
    props: {
      videos: mainVideos.data.items,
      birds: birds.data.items,
      fish: fish.data.items,
    },
  };
};
