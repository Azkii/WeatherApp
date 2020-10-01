import React from "react"
import FinallDate from './FinallDate'
function  LocationSearch(props) {
    return (
        <div className="lacationSearch">
            <h1 className="location"> {props.content.name}, {props.content.countrySys} </h1>
            <div className="span"></div>
            <div className="calanderePart">
                <div className="dayName"><h4>{props.content.datePart}</h4></div>
                <FinallDate />
            </div>
        </div>
    )
}
export default LocationSearch