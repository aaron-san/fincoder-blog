import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { promisify } from "util";

// Promisify fs.readFile to handle async file reads
const readFile = promisify(fs.readFile);

const contentDir = path.join(process.cwd(), "content");

// Function to get all markdown files in the content directory
export const getAllMdxFiles = async (contentDir: string) => {
  const files = await fs.promises.readdir(contentDir);
  return files.filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
};

// Function to get the slug (the filename without extension)
export const getSlugFromPath = (filePath: string, contentDir: string) => {
  const file = path.basename(filePath, path.extname(filePath));
  return file;
};

// Function to get the frontmatter (metadata) from the markdown file
export const getFrontmatter = async (slug: string, contentDir: string) => {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const fileContent = await readFile(filePath, "utf-8");
  const { data } = matter(fileContent);  // Get only the frontmatter (metadata)
  return data;  // Return frontmatter metadata like title, date, tags, etc.
};
