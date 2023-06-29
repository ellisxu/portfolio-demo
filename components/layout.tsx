// import Alert from './alert'
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";
import Image from "next/image";
import ScrollProgressBar from '../components/scroll-progress-bar'
import BackToTop from "./back-to-top-button";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <ScrollProgressBar />
      <BackToTop />
      <div className="relative min-h-screen">
        {/* <Alert preview={preview} /> */}
        <div className="absolute z-0 w-full h-[42rem] md:h-[54.5rem]">
          <Image
            src="/hero-bg.png"
            fill
            priority={true}
            alt="Background image"
            className="object-cover"
          />
        </div>
        <Navbar />
        <main className="relative">
          <div>{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
