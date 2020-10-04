import React from 'react'
import InfoWithContent from './Sections/InfoWithContent'

class Content extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="contentArea">
                <InfoWithContent />
              </div>
          </div>
        )
    }
}
export default Content