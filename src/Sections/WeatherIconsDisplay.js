import React from "react"

function WeatherIconsDisplay(props) {
        return(
            <div className="secondHalf">
                <div className="informations">
                    {props.content.rain}
                </div>
                <div className="Forecast">

                </div>
            </div>
        )
    }

export default WeatherIconsDisplay 