import React from 'react'
import './styles.css'

function SearchBox(props) {
    return (
        <input  type="search" 
                className="searchBox" 
                placeholder="search"
                onChange={props.handleSearch} />
    )
}

export default SearchBox
