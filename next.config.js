const withWorkers = require('@zeit/next-workers')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const path = require('path')

let config = {
  distDir: 'build',
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000',
    },
    {
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    }
    );
    return config;
  }
}



config = withWorkers(config);
config = withBundleAnalyzer(config);

module.exports = config;

