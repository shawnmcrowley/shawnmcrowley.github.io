/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/shawnmcrowley.github.io/' : '',
    basePath: isProd ? '/shawnmcrowley.github.io/' : '',
    output: 'export',
    rewrites: async () => [
      {
        source: "/doc",
        destination: "/doc/index.html",
      },
    ],
    
  };
  export default nextConfig;
