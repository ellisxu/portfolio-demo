// File: components/back-to-top-button.tsx

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackToTop = () => {
  const controls = useAnimation();
  const [isScrolled, setScrolled] = useState(false);

  const checkScroll = () => {
    if (!isScrolled && window.pageYOffset > 200) {
      setScrolled(true);
    } else if (isScrolled && window.pageYOffset <= 200) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (isScrolled) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 100, transition: { duration: 0.5 } });
    }
  }, [controls, isScrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="fixed right-6 bottom-10 p-2 bg-[#5B4D96] lg:hover:bg-[#E48066] text-white rounded-full shadow-md cursor-pointer z-50"
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6 md:h-8 md:w-8"/>
    </motion.button>
  );
};

export default BackToTop;
