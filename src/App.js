import React, { useState } from "react";
import { Home, Quizes } from "./components"

const App = () => {
  // Settings state
  const [settings, setSettings] = useState({
    quizAmount: 5,
    quizSettingsCategory: "",
    quizSettingsDifficulty: "",
    quizSettingsType: "",
    quizSettingsLimit: "none"
  });
  console.log(settings);

  // Play again state
  const [play, setPlay] = useState(false);

  // Handle form changes
  const handleFormChange = (event) => {
    const { name, value, type } = event.target;
    setSettings(prevSettings => {
      return {
        ...prevSettings,
        [name]: type === "radio" || type === "number" ? parseInt(value) : value
      }
    })
  }

  // Handle play again button
  const handlePlayButton = () => {
    setPlay(prevState => !prevState);
  }

  return (
    <main className="main-container">
      {
        !play
          ?
          <Home
            handlePlayButton={handlePlayButton}
            handleFormChange={handleFormChange}
            settings={settings} />
          :
          <Quizes
            settings={settings}
            handlePlayButton={handlePlayButton}
          />
      }
    </main>
  );
}

export default App;
