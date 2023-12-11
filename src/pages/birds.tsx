import Carousel from "@/components/Carousel";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import Suggestions from "@/components/Suggestions";
import Head from "next/head";

const OPTIONS: EmblaOptionsType = {};
export default function Birds({ birds }: Record<string, any>) {
  return (
    <>
      <Head>
        <title>
          Catflix | Birds
        </title>
        <meta
          name="description"
          content="Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform."
        ></meta>
      </Head>
      <Carousel options={OPTIONS} videos={birds.slice(0, 5)} />
      <Suggestions videos={birds} title="Birds" id="birds" />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const birdsRef = doc(db, "videos", "birds");
  const birds = await getDoc(birdsRef);

  return {
    props: {
      birds: birds.data()?.items,
    },
  };
};
