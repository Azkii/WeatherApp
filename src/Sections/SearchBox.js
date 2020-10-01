import React from 'react'

function SearchBox(props) {
    return (
        <div className="searchBox">
            <input
                type="text"
                className="searchBar"
                placeholder="Looking for me"
                onChange={props.content.query}
                value={props.content.value}
                onKeyPress={props.content.search}
            />
        </div>
    )
}
export default SearchBox