/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/shawnmcrowley.github.io/' : '',
    basePath: isProd ? '/shawnmcrowley.github.io' : '',
    output: 'export',
     // Required for static exports with images
  images: {
    unoptimized: true,
  },
  
  // Disable server features that won't work with static exports
  trailingSlash: true,

    rewrites: async () => [
      {
        source: "/doc",
        destination: "/doc/index.html",
      },
    ],
    
  };
  export default nextConfig;
