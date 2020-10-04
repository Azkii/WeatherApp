import React from 'react'

class FinallDate extends React.Component {
    render() {
        const dataList = (d) => {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                let date = d.getDate()
                let month = months[d.getMonth()]
                let year = d.getFullYear()
    
            return `${date} ${month} ${year}`
          }
          let finallData = dataList(new Date())

					//// Hide show Sec half function
					let hidden = false;
          function onClickChange() {
            if(hidden === false) {
							document.querySelector('.secondHalf').style = 'display: none'
							document.querySelector('.date').style = 'color: red'
							console.log("not hidden")
							hidden = true
						}
						else {
							document.querySelector('.secondHalf').style = 'display: block'
							document.querySelector('.date').style = 'color: blue'
							console.log("hidden")
							hidden = false
						}
					}
					//// End of Hide show Sec half function
        return (
                <div className="date">
                    {finallData}
                    <br></br>
                    <div 
												className="bottomBar"
												onClick={onClickChange}
                    />  
                </div>
        )
    }
}

export default FinallDate