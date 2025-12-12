import path from 'path';
import { getFrontmatter, getAllMdxFiles, getSlugFromPath } from './lib/utils';
import Post from '@/components/Post';

const contentDir = path.join(process.cwd(), 'content');

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

// This is a server component in Next.js 13+
// It will run server-side and fetch the data
export default async function Home() {
  const files = await getAllMdxFiles(contentDir);

  // Fetch frontmatter for each post
  const postsData = await Promise.all(
    files.map(async (file) => {
      const slug = getSlugFromPath(file);
      const frontmatter = await getFrontmatter(slug, contentDir);
      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
      };
    })
  );

  return (
    <div className="px-6 py-4">
      <h1 className="mb-2 font-bold text-3xl">Welcome to FinCoder Blog!</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Read about finance, investing, and economics.
      </p>
      <h2 className="mx-none mb-2 font-semibold text-xl">Latest Posts</h2>
      <div className="flex gap-2 ml-4">
        {postsData.map((post) => (
          <Post
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}
