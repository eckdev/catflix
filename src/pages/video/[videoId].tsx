import axios from "@/utils/axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Catfliks | Free streaming for cats</title>
      </Head>
      <div className="video-wrapper">
        <ReactPlayer
          width={"100%"}
          height={"90%"}
          url={`https://www.youtube.com/watch?v=${query.videoId}`}
          className="react-player"
          controls
        />
      </div>
    </>
  );
};

export default Video;
