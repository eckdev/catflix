import Carousel from "@/components/Carousel";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import Suggestions from "@/components/Suggestions";
import Head from "next/head";

const OPTIONS: EmblaOptionsType = {};
export default function Fish({ fish }: Record<string, any>) {
  return (
    <>
      <Head>
        <title>
          Catflix | Fish
        </title>
        <meta
          name="description"
          content="Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform."
        ></meta>
      </Head>
      <Carousel options={OPTIONS} videos={fish.slice(0, 5)} />
      <Suggestions videos={fish} title="Fish" id="fish" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fishRef = doc(db, "videos", "fish");
  const fish = await getDoc(fishRef);

  return {
    props: {
      fish: fish.data()?.items,
    },
  };
};
1