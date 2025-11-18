import { useEffect, useState } from "react";
import { House, User, Brain, FolderOpen, MessageSquareText } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { logo: <House strokeWidth={2} size={20}/> , href:"#hero" },
  { logo: <User strokeWidth={2} size={20}/> , href:"#about" },
  { logo: <Brain strokeWidth={2} size={20}/> , href:"#skills" },
  { logo: <FolderOpen strokeWidth={2} size={20}/> , href:"#projects" },
  { logo: <MessageSquareText strokeWidth={2} size={20}/> , href:"#contact" },
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
      <nav className="w-max z-2 fixed -translate-x-2/4 flex gap-[0.8rem] backdrop-blur-sm px-16 py-[0.4rem] rounded-[3rem] left-2/4 bottom-8 animate-fade-in">
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

// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");

//     if (storedTheme === "light") {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       // default or explicitly dark
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled
//           ? "py-5 backdrop-blur-md border-b border-gray-700/40"
//           : "py-5 bg-transparent border-transparent"
//       )}
//     >
//       <div className="container flex items-center justify-center">
//         {/* <a
//           className="text-xl font-bold text-blue-400 flex items-center"
//           href="#hero"
//         >
//           <span className="relative z-10 text-blue-400">
//             <span className="text-glow text-foreground"> Vedang Dhuri </span>{" "}
//             Portfolio
//           </span>
//         </a> */}

//         {/* desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-blue-400 transition-colors duration-300 font-bold"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* ✨ Moved ThemeToggle here so it stays visible on all devices */}
//         <div className="flex items-center space-x-3">
//           <button
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//             className="md:hidden p-2 text-foreground z-50"
//             aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
//           </button>
//         </div>

//         {/* mobile nav overlay */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >

//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-blue-400 transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

