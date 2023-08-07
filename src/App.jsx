import React, { createContext, useState } from "react";
import SearchLocation from "./components/SearchLocation";
import WeatherData from "./components/WeatherData";
import { useStore } from "./zustand/store";
export const WeatherContext = createContext();

const App = () => {
  let domReady = (checkState) => {
    document.readyState === "interactive" || document.readyState === "complete"
      ? checkState()
      : document.addEventListener("DOMContentLoaded", checkState);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = "visible";
  });

  const [data, setData] = useState({});
  const [location, setLocation] = useState('')

  return (
    <WeatherContext.Provider value={[data, setData, location, setLocation]}>
    <div className="main">
      <SearchLocation />
      <div className="container">
        <WeatherData />
      </div>
    </div>
    </WeatherContext.Provider>
  );
};

export default App;
