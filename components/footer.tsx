import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "./container";
import { useEffect, useState } from "react";

const Footer = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-10% 0px",
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: "-10% 0px",
  });

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0 },
  };

  const [isMDScreen, setIsMDScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMDScreen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <footer className="bg-neutral-200 border-t border-neutral-300">
      <Container>
        <div className="py-14 flex flex-col md:py-16 xl:py-28 xl:flex-row items-center">
          <motion.h3
            ref={ref1}
            variants={isMDScreen ? variants1 : {}}
            initial="hidden"
            animate={isMDScreen && inView1 ? "show" : "hidden"}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-[#D76456] tracking-tighter leading-tight text-center mb-4 lg:text-[2.5rem] xl:text-left md:mb-6 lg:pr-4 xl:w-1/2"
          >
            For the times they are <br className="block md:hidden" />{" "}
            A-Changin&apos;
            <motion.p
              ref={ref2}
              variants={isMDScreen ? variants2 : {}}
              initial="hidden"
              animate={isMDScreen && inView2 ? "show" : "hidden"}
              transition={{ duration: 0.8 }}
              className="text-2xl lg:text-3xl xl:text-right font-semibold text-[#6557A1]"
            >
              Swim, or sink like a stone
            </motion.p>
          </motion.h3>
          <div className="flex flex-col xl:flex-row justify-center items-center xl:pl-4 xl:w-1/2">
            <a
              href="fake-email-address"
              className="mx-3 bg-primary-600 text-white px-5 py-1 rounded-xl md:px-10 md:py-3 md:rounded-3xl md:text-2xl font-medium bg-gradient-to-r from-[#8C52FF] to-[#FF914D] hover:bg-gradient-to-r hover:from-[#FF914D] hover:to-[#8C52FF]"
            >
              HIRE ME
            </a>
            <a
              href="https://www.youtube.com"
              className="mx-3 text-[#D76456] py-1 md:py-3 md:text-2xl font-medium hover:text-[#FCB08C] underline"
            >
              SEE ME ON YouTube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
