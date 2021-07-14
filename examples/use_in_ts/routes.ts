import {RouteItem} from "react-router-control";
import Helloworld from "@/xxx/Helloworld"

const routes: Array<RouteItem> = [
    {
        path: "/",
        component: Helloworld
    },
    {
        path: "/test",
        component: Helloworld,
        children: [
            {
                path: "test1",
                component: Helloworld
            },
        ]
    },
    {
        path: "*",
        component: Helloworld
    }
]

export default routes
