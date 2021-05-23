import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import video from "../assets/videos/song.mp4";

const VideoPlayer = (props) => {
  const { isPlaying, updatePlayerState, currentTime } = props;
  const playerRef = useRef();

  useEffect(() => {
    if (!playerRef.current) return;
    const delta = Math.abs(playerRef.current.getCurrentTime() - currentTime);
    if (delta > 1) {
      playerRef.current.seekTo(currentTime);
    }
  }, [currentTime]);

  return (
    <div className="player">
      <ReactPlayer
        ref={playerRef}
        height="100%"
        width="100%"
        url={video}
        playing={isPlaying}
        onDuration={(duration) => updatePlayerState({ duration })}
        onProgress={(progress) =>
          updatePlayerState({ currentTime: progress.playedSeconds })
        }
      />
    </div>
  );
};

export default VideoPlayer;
