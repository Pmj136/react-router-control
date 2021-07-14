import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import RouterControl from "react-router-control"
import routes from "./routes";

ReactDOM.render(
    <BrowserRouter>
        <RouterControl routes={routes}/>
    </BrowserRouter>,
    document.getElementById('root')
)
