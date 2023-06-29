// File Path: components/hero-section.tsx

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 text-white max-w-[85rem] mx-auto py-2">
      <div className="w-full h-80 md:h-[50rem] md:w-[40rem] relative">
        <Image
          src="/hero.png" // Update this to your actual portrait image path
          alt="Your Portrait"
          fill
          priority={true}
          className="rounded object-top-20 object-cover md:object-center"
        />
      </div>
      <div className="w-full md:w-[45rem] md:pl-6 lg:pl-20">
        <h1 className="text-[1.9rem] mb-1 text-center text-white font-bold leading-tight md:text-[2.8rem] md:pr-3 md:mb-4 lg:text-[3.5rem] lg:text-right">
          Let’s make <br />
          <span className="border-b-2 border-white">Prompts</span> work for you.
        </h1>
        <p className="mb-2 md:mb-6 leading-normal md:text-[1.4rem] lg:text-[1.6rem] text-gray-300">
          As a passionate prompt engineer and a seasoned full-stack developer, I
          am dedicated to turning ideas into innovative AI-powered applications.
          Explore my latest articles and projects, showcasing my practices in
          prompt engineering.
        </p>
        <div className="flex space-x-3 md:space-x-6 justify-center md:justify-normal">
          <Link
            href="/hire-me"
            className="bg-gradient-to-r from-[#8C52FF] to-[#FF914D] hover:bg-gradient-to-r hover:from-[#FF914D] hover:to-[#8C52FF] text-white py-1 px-5 rounded-xl md:px-10 md:py-3 md:rounded-3xl md:text-2xl font-medium text-center"
          >
            HIRE ME
          </Link>
          <Link
            href="/know-more"
            className="underline text-[#FF914D] hover:text-[#FCB08C] py-1 md:py-3 md:text-2xl font-medium text-center"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
