import { EmblaOptionsType } from "embla-carousel";
import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "@/utils/axios";
import { useEffect } from "react";

const OPTIONS: EmblaOptionsType = {};
export default function Facts({ fact }: { fact: string }) {
  // useEffect(() => {
  //   async function getFact() {
  //     const res = await axios.get('https://meowfacts.herokuapp.com/')
  //     debugger
  //   }
  //   getFact()
  // }, [])

  return (
    <>
      <Head>
        <title>
          Catflix | Free Streaming for Cats | Cat Entertainment Platform
        </title>
        <meta
          name="description"
          content="Discover the purr-fect cat tv platform! Stream free cat-centric videos,movies and relaxation content. Keep your feline friends entertained and relaxed with our cat tv platform."
        ></meta>
      </Head>
      <div className="fact-height">
        <div className="flex flex-col bottom-0 left-0 right-0 top-0 absolute items-center justify-center p-8 flex-wrap">
          <h2 className="mb-3 bg-gradient-to-r from-green-300 to-purple-400 bg-clip-text text-5xl font-bold text-transparent fact-text">
            {fact}
          </h2>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const factRef = await axios.get("https://meowfacts.herokuapp.com/");
  return {
    props: {
      fact: factRef.data.data[0],
    },
  };
};
