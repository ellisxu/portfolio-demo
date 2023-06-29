// components/select-articles.tsx

import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Post from "../interfaces/post";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  posts: Post[];
};

const SelectArticles = ({ posts }: Props) => {
  return (
    <section className="pt-9 pb-0 md:pb-6 lg:py-12">
      <h2 className="mb-3 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:pr-8 md:mb-6">
        Select Articles
      </h2>
      <div className="md:grid md:grid-cols-[2fr,1fr] gap-8">
        {posts.map((post, index) => (
          <Article key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
};

type ArticleProps = {
  post: Post;
  index: number;
};

const Article = ({ post, index }: ArticleProps) => {
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
      className={index === 0 ? "md:row-span-2 md:pr-20" : ""}
    >
      <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
      <div className="mt-1 pt-1 md:mt-2 md:pt-2 lg:mt-4 lg:pt-4">
        <h3
          className={`${
            index === 0
              ? "md:mb-2 md:text-3xl lg:mb-4 lg:text-4xl"
              : "lg:mb-2 lg:text-2xl"
          } font-bold mb-1 text-xl leading-tight lg:leading-normal`}
        >
          <Link
            as={`/posts/${post.slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {post.title}
          </Link>
        </h3>
        <div
          className={`${
            index === 0 ? "md:mb-2 md:text-2xl lg:md-4" : "lg:mb-2"
          } mb-1 text-gray-600`}
        >
          <DateFormatter dateString={post.date} />
        </div>
        <p
          className={`${
            index === 0 ? "md:text-2xl" : ""
          } text-gray-700 leading-tight md:leading-normal`}
        >
          {post.excerpt}
        </p>
      </div>
    </motion.div>
  );
};

export default SelectArticles;
