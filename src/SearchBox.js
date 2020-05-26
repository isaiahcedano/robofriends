import React from 'react'
import './search_box.css'


const SearchBox = (props) => {
    const {searchRobot} = props
    return (
        <div className="pa2">
            <input className="tc pa3 ba b--green bg-lightest-blue" 
            placeholder="Search RoboFriends" 
            type="search"
            onChange = {searchRobot}
            />
        </div>
    );    
}

export default SearchBox