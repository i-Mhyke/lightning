import Image from 'next/image';
import Link from 'next/link';

import { BlogObject } from '../../types/blog-object.model';

interface IBlogList {
  blogs: BlogObject[];
}

export const BlogList = ({ blogs }: IBlogList) => {
  return (
    <div className="pt-5 pb-16">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="p-8 bg-white border rounded shadow-sm"
          >
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link href="/">
                <a
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  {blog.tag}
                </a>
              </Link>{' '}
              <span className="text-gray-600">— {blog.datePublished}</span>
            </p>
            <Link href="/">
              <a
                aria-label="Article"
                title="Jingle Bells"
                className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {blog.title}
              </a>
            </Link>
            <p className="mb-5 text-base text-gray-700">{blog.excerpt}</p>
            <div className="flex items-center">
              <Link href="/">
                <a aria-label="Author" title="Author" className="mr-3">
                  <Image
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    width="40"
                    height="40"
                  />
                </a>
              </Link>
              <div>
                <Link href="/">
                  <a
                    aria-label="Author"
                    title="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {blog.author}
                  </a>
                </Link>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
