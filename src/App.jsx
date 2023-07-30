import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

const App = () => {
  // get time and date
  const [currentTime, setCurrentTime] = useState(new Date());
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  let dayName = weekday[day.getDay()];
  const timeNow = currentTime.toLocaleTimeString();
  const dateNow = currentTime.toLocaleDateString();
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // end

  // location
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b162337f1c528138112bf67bcb4afa9f&units=metric`;

  const searchLocation = (event) => {
    if (event.key == "Enter") {
      axios.get(weatherURL).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="temps">
            {data.main ? <p> {data.main.temp.toFixed(0)}°C</p> : <p>?°C</p>}
          </div>

          <div className="weather-container">
            <div className="image">
              {data.weather ? (
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                ></img>
              ) : null}
            </div>
            <div className="weather">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="description-location">
              {data.name && data.sys ? (
                <p>
                  &nbsp;at {data.name}, {data.sys.country}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="date-time">
          <p>
            {dateNow}, {dayName}
          </p>
          <p>{timeNow}</p>
        </div>
        <div className="bottom">
          <div className="feels-like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EEF0F2"
              data-name="Layer 1"
              viewBox="0 0 32 32"
            >
              <path d="M26 30h-4a2.006 2.006 0 01-2-2v-7a2.006 2.006 0 01-2-2v-6a2.946 2.946 0 013-3h6a2.946 2.946 0 013 3v6a2.006 2.006 0 01-2 2v7a2.006 2.006 0 01-2 2zm-5-18a.945.945 0 00-1 1v6h2v9h4v-9h2v-6a.945.945 0 00-1-1zM24 9a4 4 0 114-4 4.012 4.012 0 01-4 4zm0-6a2 2 0 102 2 2.006 2.006 0 00-2-2zM10 20.184V12H8v8.184a3 3 0 102 0z" />
              <path d="M9 30a6.993 6.993 0 01-5-11.89V7a5 5 0 0110 0v11.11A6.993 6.993 0 019 30zM9 4a3.003 3.003 0 00-3 3v11.983l-.332.299a5 5 0 106.664 0L12 18.983V7a3.003 3.003 0 00-3-3z" />
              <path
                fill="none"
                d="M0 0h32v32H0z"
                data-name="&lt;Transparent Rectangle&gt;"
              />
            </svg>
            {data.main ? (
              <p>feels like {data.main.feels_like.toFixed(0)}°C</p>
            ) : (
              <p>feels like?</p>
            )}
          </div>
          <div className="humidity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g fill="#EEF0F2">
                <path d="M15.007 3.256c1.841-.399 4.126-.379 7.235.397a.997.997 0 11-.485 1.935c-2.89-.72-4.856-.7-6.326-.382-1.475.32-2.536.953-3.66 1.638l-.084.05c-1.083.662-2.282 1.393-3.866 1.657-1.644.273-3.585.031-6.192-1.01a.997.997 0 11.743-1.852c2.392.955 3.95 1.088 5.12.894 1.187-.198 2.092-.744 3.237-1.442 1.126-.687 2.44-1.487 4.278-1.885z" />
                <path d="M22.242 7.643c-3.109-.775-5.394-.795-7.235-.397-1.838.398-3.152 1.199-4.278 1.886-1.145.697-2.05 1.244-3.237 1.441-1.17.194-2.728.062-5.12-.893a.997.997 0 10-.743 1.852c2.607 1.04 4.548 1.282 6.192 1.009 1.584-.263 2.783-.995 3.866-1.656l.085-.051c1.123-.685 2.184-1.318 3.659-1.638 1.47-.318 3.436-.338 6.326.383a.997.997 0 10.485-1.936z" />
                <path
                  fillRule="evenodd"
                  d="M19 10.027c-.347 0-.637.179-.839.45-.07.096-.234.32-.452.634-.29.417-.677.997-1.067 1.644a17.828 17.828 0 00-1.092 2.085c-.293.681-.551 1.421-.55 2.172 0 .21.026.422.06.63.058.345.176.822.42 1.31a3.625 3.625 0 001.23 1.413c.605.401 1.365.635 2.29.635s1.685-.234 2.289-.635c.597-.398.983-.92 1.23-1.413a4.67 4.67 0 00.42-1.31c.035-.208.06-.42.06-.631.001-.75-.256-1.49-.549-2.171a17.812 17.812 0 00-1.093-2.085 30.585 30.585 0 00-1.519-2.278c-.202-.271-.491-.45-.838-.45zm1.612 5.599a15.853 15.853 0 00-.97-1.844c-.22-.367-.441-.712-.642-1.015-.201.303-.422.648-.643 1.015a15.867 15.867 0 00-.97 1.844l-.014.034c-.177.41-.385.896-.373 1.35.012.36.109.73.27 1.05.127.256.304.481.55.645.24.16.605.3 1.18.3s.94-.14 1.18-.3c.246-.164.422-.39.55-.645.16-.32.258-.69.27-1.05.012-.454-.197-.94-.373-1.35l-.015-.034z"
                  clipRule="evenodd"
                />
                <path d="M14.13 11.53c.76-.245 1.343.546.985 1.26-.163.325-.347.602-.712.731-.977.346-1.786.832-2.632 1.347l-.084.051c-1.083.66-2.282 1.392-3.866 1.656-1.644.273-3.585.032-6.192-1.009a.997.997 0 11.743-1.852c2.392.954 3.951 1.087 5.12.893 1.187-.197 2.092-.744 3.237-1.442 1.088-.663 2.207-1.248 3.4-1.634z" />
              </g>
            </svg>
            {data.main ? (
              <p>{data.main.humidity}% humidity</p>
            ) : (
              <p>humidity</p>
            )}
          </div>
          <div className="wind-speed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#EEF0F2"
                fillRule="evenodd"
                d="M7 5a4 4 0 114 4H3a1 1 0 010-2h8a2 2 0 10-2-2v.1a1 1 0 01-2 0V5zm9.9 1a1 1 0 011-1h.1a4 4 0 010 8H5a1 1 0 110-2h13a2 2 0 100-4h-.1a1 1 0 01-1-1zM0 12a1 1 0 011-1h1a1 1 0 110 2H1a1 1 0 01-1-1zm4 4a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm4 0a1 1 0 011-1h4a4 4 0 11-4 4v-.1a1 1 0 112 0v.1a2 2 0 102-2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {data.wind ? (
              <p>{data.wind.speed.toFixed(0)} kph</p>
            ) : (
              <p>wind speed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
