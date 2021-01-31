import React, { useState } from 'react'
import SearchBox from './SearchBox'
import WeatherIconsDisplay from './WeatherIconsDisplay'
import LocationSearch from './LocationSearch'
import WeatherBox from './WeatherBox'
const api = {
    key: "yup no key",
    base: "you no base"
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
        return (
            <div>
                <SearchBox content = {{
                      	query : e => setQuery(e.target.value),
                        value : query,
                        search : search}}
                    	/>

                {(typeof weather.main != "undefined") ? (
                    <div className="shadowBox">
                        <div className="firstHalf">
                            <WeatherBox content = {{
															temp : Math.round(weather.main.temp),
															main : weather.weather[0].main }}
														/>
                            <LocationSearch content = {{
															name : weather.name,
															countrySys : weather.sys.country,
															datePart : finallDay }}
														/>
                        </div>
                        <WeatherIconsDisplay content = {{ 
													rain : weather.wind.deg,
													speed: weather.wind.speed,
													tempMax: Math.round(weather.main.temp_max), 
													tempMin: Math.round(weather.main.temp_min) }}
												/>
                    </div>
                    
                ) : ('')}
            </div>
        )
}
export default InfoWithContent

