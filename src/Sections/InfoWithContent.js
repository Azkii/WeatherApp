import React, { useState } from 'react'
import FinallDate from './FinallDate'
import WeatherIconsDisplay from './WeatherIconsDisplay';
const api = {
    key: "fc0ae8858c2a4db39b61d147688df12d",
    base: "https://api.openweathermap.org/data/2.5/"
  }

function InfoWithContent() {
        const dayList = (d) => {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()]
    
            return `${day}`
          }
          let finallDay = dayList(new Date())
    

        ///////////
        const [query, setQuery] = useState('')
        const [weather, setWeather] = useState({})
        const search = evt => {
            if (evt.key === "Enter") {
                fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(result)
                })
            }
        }
        //////////
        return (
            <div>
                <div className="searchBox">
                    <input
                        type="text"
                        className="searchBar"
                        placeholder="Looking for me"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                <div className="shadowBox">
                    <div className="firstHalf">
                        <div>
                            <div className="weatherBox">
                                <div className="tempName">
                                    {Math.round(weather.main.temp)}°C
                                </div>
                                <div className="weather">Cloudy</div>
                            </div>
                        </div>
                        <div className="lacationSearch">
                            <h1 className="location"> {weather.name}, {weather.sys.country} </h1>
                            <div className="span"></div>
                            <div className="calanderePart">
                                <div className="dayName"><h4>{finallDay}</h4></div>
                                <FinallDate />
                            </div>
                        </div>
                        
                    </div>
                    <WeatherIconsDisplay />
                </div>
            ) : ('')}
            </div>
        )
}
export default InfoWithContent

