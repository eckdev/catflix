import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Suggestions from "@/components/Suggestions";
import { GetServerSideProps } from "next";
import axios from "@/utils/axios";
import Head from "next/head";
import NodeCache from "node-cache";
import searchYTData from "@/utils/search.js";
import {collection,doc,getDoc,getDocs} from "firebase/firestore"
import {db} from '../firebase'

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
        <title>Catflix | Free streaming for cats</title>
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

  const mainVideosRef = doc(db,"videos","mainVideos")
  const birdsRef = doc(db,"videos","birds")
  const fishRef = doc(db,"videos","fish")
  const gamesRef = doc(db,"videos","games")
  const mainVideos = await getDoc(mainVideosRef);
  const birds = await getDoc(birdsRef);
  const fish = await getDoc(fishRef);
  const games = await getDoc(gamesRef);


  return {
    props: {
      videos: mainVideos.data()?.items,
      birds: birds.data()?.items,
      fish: fish.data()?.items,
      games: games.data()?.items,
    },
  };
};
