import {FC, ComponentType} from "react";

export type RouteItem = {
    path: string,
    component: ComponentType<any>,
    children?: Array<RouteItem>,
    meta?: object,
    redirect?: never
} | {
    path: string,
    redirect: string,
    children?: never,
    component?: never,
    meta?: never
}

export interface RouterControlProps {
    routes: Array<RouteItem>
}

declare const ReactRouterControl: FC<RouterControlProps>;

export default ReactRouterControl
