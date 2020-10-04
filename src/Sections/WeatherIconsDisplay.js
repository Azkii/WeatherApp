import React from "react"

function WeatherIconsDisplay(props) {
        return(
            <div className="secondHalf">
                <div className="informations">
                    <p>
						Temperature:
					</p>
                    <div className="TempMaxMin">
						{props.content.tempMax}° - {props.content.tempMin}°C
                    </div>
                </div>
                <div className="Forecast">
					Forecast is not avaible...
                </div>
            </div>
        )
    }

export default WeatherIconsDisplay 