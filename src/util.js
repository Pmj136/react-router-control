export function resolveRoute({basePath, path, redirect}) {
    //获得标准的路径
    const _getPathString = (rawPath) => {
        if (rawPath === undefined) return null
        if (rawPath.startsWith("/")) return rawPath
        if (basePath === '/') return "/" + rawPath
        return basePath + "/" + rawPath
    }
    return {
        path: _getPathString(path),
        redirect: _getPathString(redirect)
    }
}

export function redirectRouteToEnd(routes) {
    const arrLen = routes.length;
    let point = 0,
        count = 0;

    while (++count <= arrLen) {
        if (routes[point].redirect !== undefined) {
            const moveItem = routes.splice(point, 1)[0];
            routes.push(moveItem);
        } else point++;
    }
}