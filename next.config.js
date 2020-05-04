// const withWorkers = require('@zeit/next-workers')

// module.exports = {
//   distDir: 'build',
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.worker\.js$/,
//       loader: 'worker-loader',
//       options: {
//         name: 'static/[hash].worker.js',
//         publicPath: '/_next/'
//       }
//     })

//     // Overcome Webpack referencing `window` in chunks
//     config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`

//     return config
//   }
// }

// module.exports = {
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.worker\.js$/,
//       loader: 'worker-loader',
//       // options: { inline: true }, // also works
//       options: {
//         name: 'static/[hash].worker.js',
//         publicPath: '/_next/',
//       },
//     });
//     return config
//   }
// }

// next.config.js
const withWorkers = require('@zeit/next-workers')

let config = {
  distDir: 'build'
}

config = withWorkers(config);

module.exports = config;
// module.exports = {
//   distDir: 'build'
// }