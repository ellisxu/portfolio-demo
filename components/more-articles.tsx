// components/more-articles.tsx

import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Post from "../interfaces/post";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

const MoreArticles = ({ posts }: Props) => {
  return (
    <section className="pb-8 md:pb-12">
      <h2 className="text-3xl mb-3 font-bold tracking-tighter leading-tight md:text-5xl md:pr-8 md:mb-6 lg:text-6xl">
        More Articles
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 md:grid-cols-3 lg:gap-8 lg:grid-cols-4">
        {posts.map((post, index) => (
          <Article key={post.slug + "_" +index} post={post} />
        ))}
      </div>
    </section>
  );
};

type ArticleProps = {
  post: Post;
};

const Article = ({ post }: ArticleProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] }}
    >
      <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
      <div className="mt-1 pt-1 md:mt-2 md:pt-2">
        <h3 className="font-bold text-xl mb-1 leading-tight lg:leading-normal lg:mb-2">
          <Link
            as={`/posts/${post.slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {post.title}
          </Link>
        </h3>
        <div className="mb-1 lg:mb-2 text-gray-600">
          <DateFormatter dateString={post.date} />
        </div>
        <p className="text-gray-700 leading-tight md:leading-normal">
          {post.excerpt}
        </p>
      </div>
    </motion.div>
  );
};

export default MoreArticles;
