import React from "react";
import { HiPlay, HiPause } from "react-icons/hi";

const Controls = (props) => {
  const { updatePlayerState, isPlaying, currentTime, duration } = props;

  return (
    <div className={`controls ${!isPlaying && "paused"}`}>
      <div className="info">
        {!isPlaying && (
          <>
            <h2>The Immigrant Song</h2>
            <div>Led Zeppelin</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </>
        )}
      </div>

      <div className="buttons">
        <button onClick={() => updatePlayerState({ isPlaying: !isPlaying })}>
          {isPlaying ? <HiPause /> : <HiPlay />}
        </button>

        <div className="custom-range">
          <div className="progress-wrapper">
            <div className="progress-bg"></div>
            <div
              className="progress-thumb"
              style={{ left: `calc(${(currentTime / duration) * 100}% - 7px)` }}
              // calc(variable% - 7px)
            ></div>
          </div>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(event) =>
              updatePlayerState({ currentTime: event.target.valueAsNumber })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
