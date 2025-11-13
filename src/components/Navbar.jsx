import { useEffect, useState } from "react";
import { House, User, Brain, FolderOpen, MessageSquareText } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { logo: <House strokeWidth={2} size={20} />, href: "#hero" },
  { logo: <User strokeWidth={2} size={20} />, href: "#about" },
  { logo: <Brain strokeWidth={2} size={20} />, href: "#skills" },
  { logo: <FolderOpen strokeWidth={2} size={20} />, href: "#projects" },
  { logo: <MessageSquareText strokeWidth={2} size={20} />, href: "#contact" },
];

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // default or explicitly dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <>
      <nav className="w-max z-2 fixed -translate-x-2/4 flex gap-[0.8rem] backdrop-blur-sm px-[1rem] py-[0.4rem] rounded-[3rem] left-2/4 bottom-8  shadow-[0px_0px_20px_-5px_rgba(81,_162,_255,_0.5)] animate-fade-in">
        <div className="flex gap-1">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={cn("flex text-[1.1rem] p-[0.9rem] rounded-[50%] hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out",
                activeLink === item.href
                  ? "bg-blue-400 text-black"
                  : "text-white"
              )}
            >
              {item.logo}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
