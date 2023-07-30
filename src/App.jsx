import React, { useState } from 'react'
import 'axios'

const App = () => {
  // const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=14.1938814&lon=121.1573673&appid=b162337f1c528138112bf67bcb4afa9f"

  return (
    <div class="main">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Calamba</p>
          </div>
          <div className="temps">
            <p>24°C</p>
          </div>
          <div className="description">
            <p>quite rainy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels-like">
            <p>feels like 18°C</p>
          </div>
          <div className="humidity">
            <p>10%</p>
          </div>
          <div className="wind-speed">
            <p>8 kph</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App