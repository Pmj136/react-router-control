import React from "react";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {resolveRoute, specialRouteToEnd} from "./util";

function renderRoutes(routes, basePath = "") {
    specialRouteToEnd(routes);
    return (
        <Switch>
            {
                routes.map((v, i) => {
                        const path = resolveRoute(basePath, v.path)
                        if (v.redirect) {
                            const redirectPath = resolveRoute(basePath, v.redirect)
                            return (
                                <Route key={i} exact path={path}>
                                    <Redirect to={redirectPath}/>
                                </Route>
                            )
                        }
                        if (v.path === '/') {
                            return <Route key={i} {...v} path="/" exact component={v.component}/>
                        }
                        if (v.path === '*') {
                            return <Route key={i} component={v.component}/>
                        }

                        return (
                            <Route key={i} path={path} render={
                                props => {
                                    if (v.children && v.children.length > 0) {
                                        return (
                                            <v.component>
                                                {renderRoutes(v.children, path)}
                                            </v.component>
                                        )
                                    }
                                    return <v.component {...props} meta={v.meta}/>
                                }
                            }/>
                        )

                    }
                )
            }
        </Switch>
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
            {renderRoutes(routes)}
        </Router>
    );
}