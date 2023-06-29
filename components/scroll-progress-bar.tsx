import { motion, useTransform, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      style={{
        width: progress,
      }}
      className="fixed top-0 left-0 h-2 bg-[#8C52FF] z-10"
    />
  );
};

export default ScrollProgressBar;
