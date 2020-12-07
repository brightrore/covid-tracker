import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
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

export default App
