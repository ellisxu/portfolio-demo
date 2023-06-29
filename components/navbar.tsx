// File Path: components/navbar.tsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md relative z-10">
      <div className="sm:flex px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/kpt-logo.svg"
              alt="Logo"
              width={35}
              height={35}
              className="h-12 w-auto"
            />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block absolute bg-[#332568] left-0" : "hidden"
          } w-full sm:flex sm:items-center lg:justify-end sm:space-x-2 lg:space-x-4`}
        >
          <Link
            href="/"
            className="px-1 py-2 block border-b sm:border-b-0 sm:px-6 lg:px-3 lg:text-xl text-center font-medium text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-1 py-2 block border-b sm:border-b-0 sm:px-6 lg:px-3 lg:text-xl text-center font-medium text-white"
          >
            About
          </Link>
          <Link
            href="/articles"
            className="px-1 py-2 block border-b sm:border-b-0 sm:px-6 lg:px-3 lg:text-xl text-center font-medium text-white"
          >
            Articles
          </Link>
          <Link
            href="/projects"
            className="px-1 py-2 block border-b sm:border-b-0 sm:px-6 lg:px-3 lg:text-xl text-center font-medium text-white"
          >
            Projects
          </Link>
          <div className="flex justify-center space-x-3 px-2 py-4 sm:px-6 sm:space-x-4 lg:space-x-10">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" className="h-7 w-7 text-[#F49C7C] hover:text-[#E98E6E]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" className="h-7 w-7 text-[#F49C7C] hover:text-[#E98E6E]" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" className="h-7 w-7 text-[#F49C7C] hover:text-[#E98E6E]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="lg"
                className="h-7 w-7 text-[#F49C7C] hover:text-[#E98E6E]"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
