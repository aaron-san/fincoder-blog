import withMDX from "@next/mdx";

const repo = "fincoder-blog";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["js", "ts", "tsx", "mdx"],

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
