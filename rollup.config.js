import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs';
import optionalChaining from 'acorn-optional-chaining';

export default {
    input: 'src/index.js',
    acorn: {
        ecmaVersion: 2020
    },
    acornInjectPlugins: [optionalChaining],
    output: {
        name: 'Sortable',
        file: 'dist/livewire-sortable.js',
        format: 'umd',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs({
            exclude: 'src/**'
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser({
            compress: {
                drop_debugger: false,
            },
        }),
        filesize()
    ]
}
