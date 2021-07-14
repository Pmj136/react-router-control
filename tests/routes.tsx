import {RouteItem} from "../index";
import React from "react";

const Home = () => <div>home</div>

const Parent = (props: any) => (
    <div>
        <h2>parent</h2>
        {props.children}
    </div>
)
const Child = () => <div>child</div>
const NotFound = () => <div>404</div>

const routes: Array<RouteItem> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/parent",
        component: Parent,
        children: [
            {
                path: "child",
                component: Child
            },
            {
                path: "*",
                component: NotFound
            }
        ]
    },
    {
        path: "*",
        component: NotFound
    },
]

export const reverseRoutes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/parent",
        component: Parent,
        children: [
            {
                path: "child",
                component: Child
            },
            {
                path: "*",
                component: NotFound
            }
        ]
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "*",
        component: NotFound
    }
]
export default routes