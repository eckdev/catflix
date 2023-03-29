import axios from "@/utils/axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const { query } = useRouter();
  return (
    <div className="video-wrapper">
      <ReactPlayer
        width={"100%"}
        height={"90%"}
        url={`https://www.youtube.com/watch?v=${query.videoId}`}
        className="react-player"
        controls
      />
    </div>
  );
};

export default Video;
