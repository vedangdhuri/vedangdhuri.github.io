import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import homeImg from "../assets/homeImg.png";

export const HeroSection = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Computer Engineer", "UI/UX Designer", "Photo Editor", "Gamer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, index]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">

        {/* Hero Image */}
        <div id="homeImg" className="inline-flex justify-center items-center animate-fade-in mb-10">
          <img
            src={homeImg}
            alt="Vedang Dhuri"
            className="rounded-full transition-all duration-500 mx-auto w-[60vw] sm:w-[32vw] md:w-[27vw] lg:w-[24vw] xl:w-[23vw] 2xl:w-[22vw]"
          />
          {/* Signature */}
          <div className="text-3xl mx-auto md:text-5xl absolute bottom-3 opacity-70">
            <span id="signature">Vedang Dhuri</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
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
          <div className="text-2xl md:text-5xl font-bold tracking-tight">
            <span className="animate-fade-in-delay-2">
              I&apos;m a
              <span className="text-blue-400 animate-fade-in-delay-3 transition delay-150 ease-in-out hover:text-indigo-500"> {text}</span>
            </span>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button bg-blue-400 font-bold transistion delay-150 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)]">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-blue-400" />
      </div>
    </section>
  );
};
