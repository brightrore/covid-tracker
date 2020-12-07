import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {tarikDataGlobal} from "./api"

class App extends React.Component{
state = {
    dataGlobal: {

    }
}

async componentDidMount() {
    const dataGlobal = await tarikDataGlobal()
    this.setState({dataGlobal: dataGlobal})
    console.log(this.state.dataGlobal)
}

render(){
    return (
        <div>
            <Router >
            <h1>Covid Tracker</h1>
            <ul>
                <li>
                    <Link to="/">Global</Link>
                </li>
                <li>
                    <Link to="/indonesia">Indonesia</Link>
                </li>
                <li>
                    <Link to="/provinsi">Per Provinsi</Link>
                </li>
            </ul>
            </Router>
        </div>
    )
}
}

export default App
