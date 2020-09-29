import React from 'react'
import Nav from './Nav'
import Content from "./Content"
import Footer from "./Footer"

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
