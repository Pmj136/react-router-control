import React, {ComponentType} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {resolveRoute, specialRouteToEnd} from "./util";
import {RouteItem, RouterControlProps} from "../index";


function renderRoutes(routes: Array<RouteItem>, basePath: string = "") {
    specialRouteToEnd(routes);
    return (
        <Switch>
            {
                routes.map((v, i) => {
                        const path = resolveRoute(basePath, v.path)
                        if (v.redirect !== undefined) {
                            const redirectPath = resolveRoute(basePath, v.redirect)
                            return (
                                <Route key={i} exact path={path}>
                                    <Redirect to={redirectPath}/>
                                </Route>
                            )
                        }
                        if (v.path === '*') {
                            return <Route key={i} component={v.component}/>
                        }
                        return (
                            <Route key={i} sensitive exact={v.path === '/'} path={path} render={
                                props => {
                                    const Child: ComponentType<any> = v.component
                                    if (v.children && v.children.length > 0) {
                                        return (
                                            <Child>
                                                {
                                                    renderRoutes(v.children, path)
                                                }
                                            </Child>
                                        )
                                    }
                                    return <Child {...props} meta={v.meta}/>
                                }
                            }/>
                        )

                    }
                )
            }
        </Switch>
    )
}

export default function RouterControl(props: RouterControlProps) {
    return renderRoutes(props.routes);
}