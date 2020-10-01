import React from 'react'

function WeatherBox(props) {
    return(
        <div className="weatherBox">
            <div className="tempName">
                {props.content.temp}°
            </div>
            <div className="weather">{props.content.main}</div>
        </div>
    )
}
export default WeatherBox