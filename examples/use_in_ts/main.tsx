import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouterControl from "react-router-control"
import routes from "./routes";

ReactDOM.render(
    <ReactRouterControl routes={routes}/>,
    document.getElementById('root')
)
