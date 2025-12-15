/** @type {import('next').NextConfig} */
module.exports = {
  images: { unoptimized: true },   // we're not using <Image> here
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      '@': require('path').resolve(__dirname),
    },
  },
}
