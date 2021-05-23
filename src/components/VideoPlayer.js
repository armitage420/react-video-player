import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/videos/song.mp4";

const VideoPlayer = (props) => {
  const { isPlaying } = props;

  return (
    <div>
      <ReactPlayer url={video} playing={isPlaying} />
    </div>
  );
};

export default VideoPlayer;
