import {FC, ReactNode} from "react";

export type RouteType = {
    path: string,
    component: ReactNode,
    meta?: object,
    redirect?: never
} | {
    path: string,
    redirect: string,
    component?: never,
    meta?: never
}


export interface ReactRouterControlProps {
    routes: Array<RouteType>,
    mode?: 'browser' | 'hash'
}

declare const ReactRouterControl: FC<ReactRouterControlProps>;

export default ReactRouterControl
