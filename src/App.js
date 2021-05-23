import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Controls from "./components/Controls";

function App() {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    duration: 0,
    currentTime: 0,
  });

  const updatePlayerState = (newValue) =>
    setPlayerState({ ...playerState, ...newValue });

  return (
    <div className="App">
      <VideoPlayer {...playerState} updatePlayerState={updatePlayerState} />
      <Controls {...playerState} updatePlayerState={updatePlayerState} />
    </div>
  );
}

export default App;
