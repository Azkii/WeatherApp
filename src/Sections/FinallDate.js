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

        return (
            <div>
                <div className="date">
                    {finallData}
                    <br></br>
                    <div 
                        className="bottomBar" 
                    />  
                </div>

            </div>
        )
    }
}

export default FinallDate