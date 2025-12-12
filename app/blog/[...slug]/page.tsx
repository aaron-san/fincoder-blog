import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../mdx-components";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import matter from "gray-matter";
import Link from "next/link";
import { getSlugFromPath, } from "@/app/lib/utils";
import CoverImage from "@/components/CoverImage";


const blogDir = path.join(process.cwd(), "content");

// Function to recursively get all MDX files and return their slugs
const getAllSlugs = (dir: string) => {
  const slugs: string[] = [];

  // Read all files in the directory
  const files = fs.readdirSync(dir);

  // Loop through all the files
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // If it's a directory, recurse into it
      const subSlugs = getAllSlugs(filePath);
      subSlugs.forEach((subSlug) => {
        slugs.push(path.join(file, subSlug)); // Join subfolder to get full path
      });
    } else if (file.endsWith(".mdx") || file.endsWith(".md")) {
      // If it's an MDX file, add it to the list
      const slug = file.replace(/\.(mdx|md)$/, ""); // Remove the file extension
      slugs.push(slug);
    }
  }

  return slugs;
};

// Generate static params
export async function generateStaticParams() {
  // Get all slugs from the content directory
  const slugs = getAllSlugs(blogDir);

  // Return slugs as params for static generation
  return slugs.map((slug) => ({
    slug: slug.split("/"), // Split slug into an array for dynamic routing
  }));
}



export default async function BlogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  const slugPath = params.slug.join("/"); // e.g. "blog/interest-rate-primer"
  const filePath = path.join(blogDir, `${slugPath}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data: frontmatter } = matter(source);

  const { content: MDXContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  if (frontmatter.draft) {
    return;
  }

  const cleanedBackUrl =
    frontmatter.backUrl &&
    (frontmatter.backUrl.startsWith("/")
      ? frontmatter.backUrl
      : "/" + frontmatter.backUrl);
  const cleanedNextUrl =
    frontmatter.nextUrl &&
    (frontmatter.nextUrl.startsWith("/")
      ? frontmatter.nextUrl
      : "/" + frontmatter.nextUrl);

  return (
    <article className="mx-auto px-2 sm:px-6 max-w-3xl dark:text-emerald-100">
      {frontmatter.backUrl && (
        <Link
          href="/"
          className="flex gap-1 dark:hover:text-emerald-300 dark:text-emerald-400 no-underline"
        >
          <div className="text-xl">⇽</div>
          <div className="py-[5px] text-sm">Topics</div>
        </Link>
      )}
      <div className="mb-4 border-emerald-100/20 border-b w-fit">
        <h1>{frontmatter.title ?? "Untitled"}</h1>
        <div className="flex gap-2 mt-1 pb-2">
          {frontmatter.tags &&
            frontmatter.tags.map((tag: string) => (
              <div
                className="bg-emerald-600 px-2 py-1 rounded-full font-bold text-emerald-300 text-xs"
                key={tag}
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
      <CoverImage src={frontmatter.cover_img} alt={frontmatter.cover_img_alt} />
      {MDXContent}
      <div className="my-8"></div>
      <hr className="text-emerald-300" />
      <div className="flex justify-around items-center gap-4 my-4">
        {frontmatter.backUrl && (
          <Link
            href={cleanedBackUrl}
            className="flex gap-1 px-4 border border-emerald-300 dark:hover:border-emerald-200 rounded dark:hover:text-emerald-200 dark:text-emerald-300 no-underline"
          >
            <div className="text-xl">⇽</div>
            <div className="py-[5px] text-sm">Back</div>
          </Link>
        )}

        {frontmatter.nextUrl && (
          <Link
            href={cleanedNextUrl}
            className="flex gap-1 px-4 border border-emerald-300 dark:hover:border-emerald-200 rounded dark:hover:text-emerald-200 dark:text-slate-300 no-underline"
          >
            <div className="py-[5px] text-sm">Next</div>
            <div className="text-xl">⇾</div>
          </Link>
        )}
      </div>
      <div className="bg-mint-800 my-4 p-12 text-mint-50">
        <div className="mb-2 font-semibold uppercase">Disclaimer:</div>
        <div>
          This article does not provide or constitute investment advice,
          recommendations, or endorsements of any financial products,
          strategies, or securities. It is intended solely for informational and
          educational purposes. Any opinions expressed are based on the author’s
          interpretation of available information at the time of writing.
          Readers should conduct their own research and consult with a qualified
          financial advisor before making any investment decisions.
        </div>
      </div>
    </article>
  );
}
