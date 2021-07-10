import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const env = process.env.NODE_ENV
export default {
    input: "src/index.js",
    output: [
        {
            file: "build/index.esm.js",
            format: "esm",
            name: "ReactRouterView",
            exports: "default"
        },
        {
            file: "build/index.cjs.js",
            format: "cjs",
            name: "ReactRouterView",
            exports: "default"
        }
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
        nodeResolve(),
        babel({
            exclude: '**/node_modules/**'
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        commonjs()
    ]
}