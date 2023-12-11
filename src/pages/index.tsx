import Carousel from "@/components/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Suggestions from "@/components/Suggestions";
import { GetServerSideProps } from "next";
import Head from "next/head";
import {doc,getDoc} from "firebase/firestore"
import {db} from '../firebase'

const OPTIONS: EmblaOptionsType = {};
export default function Home({
  videos,
}: Record<string, any>) {
  return (
    <>
      <Head>
        <title>Catflix | Free Streaming for Cats | Cat Entertainment Platform</title>
        <meta name="description" content='Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform.'></meta>
      </Head>
      <Carousel options={OPTIONS} videos={videos.slice(0, 5)} />
      <Suggestions
        videos={videos.slice(5, 15)}
        title="Related Videos"
        id="related_videos"
      />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {

  const mainVideosRef = doc(db,"videos","mainVideos")
  const mainVideos = await getDoc(mainVideosRef);


  return {
    props: {
      videos: mainVideos.data()?.items
    },
  };
};
