import { ArrowDown } from "lucide-react";
import homeImg from "../assets/img/homeImg.png";
import { FlipWords } from "./ui/FlipWords";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const words = ["Computer Engineer", "UI/UX Designer", "Photo Editor", "Gamer", "Learning MERN Stack"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 -translate-y-16"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">

        {/* Hero Image */}
        <div id="homeImg" className="inline-flex justify-center items-center animate-fade-in mb-10">
          <img
            src={homeImg}
            alt="Vedang Dhuri"
            className="rounded-full transition-all duration-500 mx-auto w-[66vw] sm:w-[48vw] md:w-[44vw] lg:w-[38vw] xl:w-[26vw] 2xl:w-[22vw]"
          />
          {/* Signature */}
          <div className="text-3xl mx-auto absolute bottom-3 opacity-70 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
            <span id="signature">Vedang Dhuri</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> It&apos;s</span>
            <span className="text-blue-400 opacity-0 animate-fade-in-delay-1 transition delay-150 ease-in-out hover:text-indigo-500">
              {" "}
              Vedang
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dhuri
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold tracking-tight justify-items-center">
            <span className="animate-fade-in-delay-2 flex">
              I&apos;m a
              <span className="text-blue-400 animate-fade-in-delay-3 transition delay-150 ease-in-out hover:text-indigo-500">
                <motion.span
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.5 }}
                >
                  <FlipWords
                    words={words}
                    className="ml-2"
                  />
                </motion.span>
              </span>
            </span>
          </div>

          <div className="pt-3 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button bg-blue-400 font-bold transistion delay-150 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)] ">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="scrolldown">
        <div className="absolute bottom-12 left-1/2 transform -translate-y-2/8 md:-translate-y-1 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll Down </span>
          <ArrowDown className="h-5 w-5 text-blue-400" />
        </div>
      </div>
    </section>
  );
};
