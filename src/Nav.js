import React from 'react'
import FinallDate from './Sections/FinallDate'
class Nav extends React.Component {
    render() {
        return (
            <nav className="NavBox">
                <div>
                    <FinallDate />
                </div>
            </nav>
        )
    }
}

export default Nav