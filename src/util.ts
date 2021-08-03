export function resolveRoute(basePath: string, rawPath: string): string {
    if (rawPath.startsWith('/')) return rawPath
    if (basePath === '/') return '/' + rawPath
    if (rawPath === '') return basePath
    return basePath + '/' + rawPath
}
