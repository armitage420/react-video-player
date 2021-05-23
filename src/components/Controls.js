import React from "react";

const Controls = (props) => {
  const { updatePlayerState, isPlaying } = props;

  return (
    <div className="controls">
      <button onClick={() => updatePlayerState({ isPlaying: !isPlaying })}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Controls;
