export function resolveRoute(basePath, rawPath) {
    if (rawPath === undefined) return null
    if (rawPath.startsWith("/")) return rawPath
    if (basePath === '/') return "/" + rawPath
    return basePath + "/" + rawPath
}

export function specialRouteToEnd(routes) {
    let allItem = null
    const arrLen = routes.length;
    let point = 0,
        count = 0;
    while (++count <= arrLen) {
        if (routes[point].path === "*") {
            allItem = routes[point]
            routes.splice(point, 1)
            continue
        }
        if (routes[point].redirect !== undefined) {
            const moveItem = routes.splice(point, 1)[0];
            routes.push(moveItem);
        } else point++;
    }
    if (allItem != null) routes.push(allItem)
}
