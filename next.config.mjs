import withMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production"; // Ensure production check works

const config = {
  pageExtensions: ["js", "mjs", "ts", "tsx", "mdx"],
  output: "export", // Enables static HTML export
  swcMinify: true, // Minifies JavaScript with SWC for better performance
  images: {
    unoptimized: true, // Disable image optimization (necessary for static export)
  },
  experimental: {
    mdxRs: false, // Use the older MDX compiler; change if needed
  },
  basePath: isProd ? "/fincoder-blog" : "", // Add basePath for production
  assetPrefix: "", // No asset prefix needed for GitHub Pages
};

export default withMDX({
  extension: /\.mdx?$/,
})(config);
