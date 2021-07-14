import {RouteItem} from "../index";

export function resolveRoute(basePath: string, rawPath: string): string {
    if (rawPath.startsWith("/")) return rawPath
    if (basePath === '/') return "/" + rawPath
    if (rawPath === "") return basePath
    return basePath + "/" + rawPath
}

export function specialRouteToEnd(routes: Array<RouteItem>) {
    let index = 0,
        p = -1
    const len = routes.length
    while (++p < len) {
        if (routes[p].redirect !== undefined) {
            index++
        } else if (index != 0) {
            [routes[p - index], routes[p]] = [routes[p], routes[p - index]]
        }
    }
    const matchIndex = routes.findIndex(v => v.path === "*")
    if (matchIndex !== -1 && matchIndex !== len - 1) {
        routes.push(routes.splice(matchIndex, 1)[0])
    }
}
