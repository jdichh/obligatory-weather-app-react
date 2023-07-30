import React, { useState } from 'react'
import 'axios'

const App = () => {
  // const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=14.1938814&lon=121.1573673&appid=b162337f1c528138112bf67bcb4afa9f"

  return (
    <div>
      <div className="container">
        <div className="top">
          <div className="location">
            {/* location here */}
          </div>
          <div className="temps">
            {/* temperature data */}
          </div>
          <div className="description">
            {/* other info */}
          </div>
        </div>
        <div className="bottom">
          <div className="feels-like">
            {/* feels like */}
          </div>
          <div className="humidity">
            {/* humidity data */}
          </div>
          <div className="wind-speed">
            {/* wind speed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App