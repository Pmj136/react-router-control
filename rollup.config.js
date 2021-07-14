import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';

const env = process.env.NODE_ENV
export default {
    input: "src/RouterControl.tsx",
    output: [
        {
            file: "build/index.esm.js",
            format: "esm",
            exports: "default"
        },
        {
            file: "build/index.cjs.js",
            format: "cjs",
            exports: "default"
        }
    ],
    external: [
        "@babel/runtime",
        "react",
        "react-router-dom"
    ],
    plugins: [
        nodeResolve(),
        babel({
            exclude: '**/node_modules/**',
            babelHelpers: "runtime",
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        commonjs(),
        typescript()
    ]
}