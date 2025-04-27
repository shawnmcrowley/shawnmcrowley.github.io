/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/documentation_mdx/' : '',
    basePath: isProd ? '/documentation_mdx' : '',
    output: 'export',
    rewrites: async () => [
      {
        source: "/doc",
        destination: "/doc/index.html",
      },
    ],
    
  };
  export default nextConfig;
