import {RouteItem} from "../index";
import React from "react";

const ComponentA = () => <div>ComponentA</div>

const ComponentB = () => <div>ComponentB</div>

const ComponentC = (props: any) => (
    <div>
        <h2>ComponentC</h2>
        {props.children}
    </div>
)
const ComponentC1 = () => <div>ComponentC1</div>
const NotFound = () => <div>Not Found</div>

const routes: Array<RouteItem> = [
    {
        path: "/",
        redirect: "/a",
    },
    {
        path: "/a",
        component: ComponentA
    },
    {
        path: "/b",
        component: ComponentB
    },
    {
        path: "/c",
        component: ComponentC,
        children: [
            {
                path: "c1",
                component: ComponentC1
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
    }
]
export default routes