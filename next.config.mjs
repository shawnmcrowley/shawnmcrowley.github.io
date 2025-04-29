/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  reactStrictMode: true,
  //  assetPrefix: isProd ? '/shawnmcrowley.github.io/' : '',
  //  basePath: isProd ? '/shawnmcrowley.github.io' : '',
  output: isDev ? "standalone" : "export",
  // Required for static exports with images
  images: {
    unoptimized: true,
  },

  // Disable server features that won't work with static exports
  trailingSlash: isDev ? false : true,

  // For Use in Development Testing of Docusaurus - set development mode in .env.local

  rewrites: isDev 
    ? async () => [
        {
          source: "/doc",
          destination: "/doc/index.html",
        },
      ]
      : ""
    ,
};
export default nextConfig;
