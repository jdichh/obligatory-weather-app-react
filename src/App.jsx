import React, { useState, createContext } from "react";
import SearchLocation from "./components/SearchLocation";
import WeatherData from "./components/WeatherData";
export const Context = createContext();

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
  const [location, setLocation] = useState("");

  return (
    <Context.Provider value={[data, setData, location, setLocation]}>
      <div className="main">
        <SearchLocation />
        <div className="container">
          <WeatherData />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
