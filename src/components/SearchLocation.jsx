import React, { useState } from "react";
import axios from "axios";
import { useStore } from "../zustand/store";

const SearchLocation = () => {
  const setData = useStore((state) => state.setData); // get the setData action
  const [location, setLocation] = useState("");

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
        )
        .then((response) => {
          setData(response.data);
        });
      setLocation("");
    });
  };

  const searchLocation = (event) => {
    if (event.key == "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
        )
        .then((response) => {
          setData(response.data);
        });
      setLocation("");
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <header>
      <div className="search">
        <input
          type="text"
          value={typeof location === "string" ? location : ""}
          onChange={handleLocationChange}
          onKeyDown={searchLocation}
          placeholder="Where are you right now?"
          aria-label="Where are you right now? Enter your location here."
        />
      </div>
      <div className="findMe">
        <button
          className="findMeButton"
          onClick={getCoordinates}
          aria-label="Get my location button. Requires location services."
        >
          Get My Location
        </button>
      </div>
    </header>
  );
};

export default SearchLocation;
