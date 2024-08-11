
const path = require('path')
// 安装插件(因为我的rollup版本是4.18.0，所以commonjs、babel和terser都需要用最新版本)：npm i -D rollup-plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel rollup-plugin-json @rollup/plugin-terser rollup-plugin-vue rollup-plugin-postcss

// 引入rollup打包构建所需插件
// const resolve = require('rollup-plugin-node-resolve') // 将第三方模块的代码一起打包
const resolve = require('@rollup/plugin-node-resolve') // 将第三方模块的代码一起打包

// const commonjs = require('rollup-plugin-commonjs') // 支持cjs模式用法
const commonjs = require('@rollup/plugin-commonjs') // 支持cjs模式用法

// const babel = require('rollup-plugin-babel') // es6转为es5
const { babel } = require('@rollup/plugin-babel') // es6转为es5

const json = require('rollup-plugin-json') // 支持打包json文件

// const { terser } = require('rollup-plugin-terser') // 压缩代码
const terser = require('@rollup/plugin-terser'); // // 压缩代码

const vue = require('rollup-plugin-vue') // 打包vue组件
const postcss = require('rollup-plugin-postcss') // 使用scss|less

const inputPath = path.resolve(__dirname, './src/index.js')
const outUmdPath = path.resolve(__dirname, './dist/datav.js')
const outEsPath = path.resolve(__dirname, './dist/datav.es.js')
const outCjsPath = path.resolve(__dirname, './dist/datav.cjs.js')
// node默认是使用commonJS标准，所以得用module.exports; 而不能用esm【export default】
module.exports = {
  input: inputPath,
  output: [
    {
      file: outUmdPath,
      format: 'umd', // 三种格式： umd(函数) cjs(module.exports 只能存在于node,浏览器无法直接使用文件module不存在于window) es(export default {} 浏览器要使用script要加type="module"才能使用)
      name: 'datav',
      globals: {
        vue: 'vue'
      }
    },
    {
      file: outEsPath,
      format: 'es',
      globals: {
        vue: 'vue'
      }
    },
    // {
    //   file: outCjsPath,
    //   format: 'cjs',
    // },
  ],
  plugins: [
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    json(),
    postcss({
      plugins: []
    }),
    // terser() // 压缩代码
  ]
}