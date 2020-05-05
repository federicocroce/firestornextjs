const withWorkers = require('@zeit/next-workers')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

let config = {
  distDir: 'build'
}

config = withWorkers(config);
config = withBundleAnalyzer(config);

module.exports = config;