import React from "react";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {resolveRoute, redirectRouteToEnd} from "./util";


function renderRoutes(routes, basePath = "") {
    redirectRouteToEnd(routes)
    return routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} basePath={basePath}/>
    ))
}


const RouteWithSubRoutes = (route) => {
    const {path, redirect} = resolveRoute(route);
    return (
        <>
            {
                redirect
                    ?
                    <Route exact path={path}>
                        <Redirect to={redirect}/>
                    </Route>
                    :
                    <Route
                        path={path}
                        render={props => (
                            <route.component {...props}>
                                {renderRoutes(route.children || [], path)}
                            </route.component>
                        )
                        }
                    />
            }
        </>
    )
}
export default function RouterControl(props) {
    const {routes, mode} = props
    let Router = BrowserRouter;
    if (mode === 'hash') Router = HashRouter;
    //mode hash or browser.
    //default:browse
    return (
        <Router>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </Router>
    );
}