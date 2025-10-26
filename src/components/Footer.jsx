import { ArrowUp } from "lucide-react";
import { Instagram, Linkedin, Facebook, Github } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="mx-auto py-12 px-4 bg-card border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-between relative">
      {/* Social icons */}
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-8">
        <a
          className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
          href="https://www.linkedin.com/in/vedang-dhuri-b03280348" target="_blank">
          <Linkedin />
        </a>
        <a
          className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
          href="https://www.instagram.com/vedang.dhuri.69" target="_blank">
          <Instagram />
        </a>
        <a
          className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
          href="https://www.facebook.com/vedang.dhuri.69/" target="_blank">
          <Facebook />
        </a>
        <a
          className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
          href="https://github.com/vedangdhuri" target="_blank">
          <Github />
        </a>
      </div>
      <div className="ml-auto">
        <a
          href="#hero"
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 transition-colors items-end justify-center hover:scale-105"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
