import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Suggestions from "@/components/Suggestions";
import { GetServerSideProps } from "next";
import axios from "@/utils/axios";
import Head from "next/head";
import NodeCache from "node-cache";

const cache = new NodeCache();
const OPTIONS: EmblaOptionsType = {};
export default function Home({
  videos,
  birds,
  fish,
  games,
}: Record<string, any>) {
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
      <Suggestions videos={games} title="Games" id="games" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const mainVideosCachedData = cache.get("mainVideos");
  const birdsCachedData = cache.get("birds");
  const fishCachedData = cache.get("fish");
  const gamesCachedData = cache.get("games");
  if (mainVideosCachedData) {
    return {
      props: {
        videos: mainVideosCachedData,
        birds: birdsCachedData ?? [],
        fish: fishCachedData ?? [],
        games: gamesCachedData ?? [],
      },
    };
  }
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

  const games = await axios.get("search", {
    params: {
      q: "cat tv for cats to watch games",
      maxResults: 10,
    },
  });

  cache.set("mainVideos", mainVideos.data.items);
  cache.set("birds", birds.data.items);
  cache.set("fish", fish.data.items);
  cache.set("games", games.data.items);

  return {
    props: {
      videos: mainVideos.data.items,
      birds: birds.data.items,
      fish: fish.data.items,
      games: games.data.items,
    },
  };
};
