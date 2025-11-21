import { ArrowUp } from "lucide-react";
import { Instagram, Linkedin, Facebook, Github } from "lucide-react";
import { Discord } from "react-bootstrap-icons";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { logo: <Linkedin />, href: "https://www.linkedin.com/in/vedang-dhuri-b03280348" },
  { logo: <Instagram />, href: "https://www.instagram.com/vedang.dhuri.69" },
  { logo: <Facebook />, href: "https://www.facebook.com/vedang.dhuri.69/" },
  { logo: <Github />, href: "https://github.com/vedangdhuri" },
  { logo: <Discord className="w-6 h-6" />, href: "https://discord.com/users/767682446959050753" },
]

export const Footer = () => {
  return (
    <footer className="mx-auto py-90 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-between">
      {/* Social icons */}
      <div className="absolute left-1/2 -translate-x-1/2 flex mt-15 w-full justify-center">
        <a href="#hero">
          <h2 className="font-medium tracking-tight transition delay-100 ease-in-out text-5xl md:text-6xl hover:text-blue-400">VEDANG DHURI</h2>
        </a>
      </div>

      {/* Social icons */}
      <div className="absolute left-1/2 -translate-x-1/2 flex mt-50 space-x-8">
        {socialLinks.map((item) => (
          <a
            key={item}
            className="transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-blue-400"
            href={item.href} target="_blank">
            {item.logo}
          </a>
        ))}
      </div>

      <div className="flex space-x-8 absolute left-1/2 -translate-x-1/2 mt-80">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-blue-400 transition-colors duration-300 text-lg font-bold"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="absolute left-1/2 -translate-x-1/2 flex mt-110">
        <p className="text-sm text-muted-foreground">
          {" "}
          &copy; {new Date().getFullYear()} Vedang Dhuri. All rights reserved.
        </p>
      </div>

      <div className="ml-auto">
        <a
          href="#hero"
          className="absolute right-6 top-2/3 -translate-y-1/2 p-3 rounded-full bg-blue-400/10 transition-colors items-end justify-center hover:scale-110 hover:text-blue-400/30"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
