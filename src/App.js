import React, { Component } from 'react'
import CardList from './CardList'
import {robots} from './robot_database'
import SearchBox from './SearchBox'
import './app.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots:robots,
            search_field:'',
        }
    }

    onSearch = (event) => {
        this.setState( { search_field:event.target.value } )
    }

    render() {

        const robot_search = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search_field.toLowerCase())
        })

        return (
            <div className="tc">
                <h1 id="title">ROBOFRIENDS</h1>
                <SearchBox searchRobot={this.onSearch}/>
                <CardList robots={robot_search}/>
            </div>
        );  
    }  
}
export default App
