"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head";

interface Blog {
  description: string; // Or 'brief' if that’s your schema
  slug: string;
  image: { asset: { _ref: string; _type: string }; alt?: string };
  title: string;
  href: string;
  tags: string[];
  content: any[];
  publishedAt: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `*[_type == "Posts"] {
        description,
        "slug": slug.current,
        image,
        title,
        href,
        tags,
        content,
        publishedAt
      }`;
      try {
        const result = await client.fetch<Blog[]>(query);
        console.log("Fetched blogs:", result);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return <p>No blogs found.</p>;
  }

  return (
    <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center">
      <Head>{/* Your metadata */}</Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className="group flex flex-col items-center text-dark dark:text-light mb-8">
            <Link href={`/blogs/${blog.slug}`} className="h-full rounded-xl overflow-hidden">
              {blog.image && (
                <Image
                  src={urlFor(blog.image).url()}
                  alt={blog.image.alt || blog.title}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                  sizes="(max-width: 440px) 80vw, (max-width: 824px) 30vw, 23vw"
                  placeholder="blur"
                  blurDataURL={urlFor(blog.image).width(10).height(10).url()}
                  loading="lazy"
                />
              )}
            </Link>
            <div className="flex flex-col w-full mt-4">
              {blog.tags?.[0] && (
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                  {blog.tags[0]}
                </span>
              )}
              <Link href={`/blogs/${blog.slug}`} className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                    {blog.title}
                  </span>
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {blog.description.length > 150 ? `${blog.description.slice(0, 150)}...` : blog.description}
                </p>
                <Link href={`/blogs/${blog.slug}`}>
                  <button className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300 mt-2">
                    Read More
                  </button>
                </Link>
              </Link>
              <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mt-2">
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                  : "Date not available"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;