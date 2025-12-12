import React from "react";
import Link from "next/link";

const Post = ({ title, href, date, tags }: { title: string; href: string; date: string; tags: string[] }) => {
  return (
    <div className="hover:bg-mint-600 shadow p-4 border border-mint-500 rounded transition-shadow duration-200">
      <Link href={href} className={`flex gap-4dark:border-emerald-100/50 rounded w-fit mb-1`}>
        <div className="mx-auto border-emerald-100/50 w-full font-bold">
          {title}
        </div>
      </Link>
      <div className="text-gray-500 text-sm">{date}</div>
      <div className="mt-2">
        {tags && tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-blue-500 text-xs">
                #{tag}
              </span>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Post;
