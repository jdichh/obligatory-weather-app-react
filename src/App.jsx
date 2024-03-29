import React from "react";
import SearchLocation from "./components/SearchLocation";
import WeatherData from "./components/WeatherData";
import { useStore } from "./zustand/store";

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

  return (
    <>
      <SearchLocation />
      <main>
        <WeatherData />
      </main>
    </>
  );
};

export default App;
