import { useState } from "react";
import { cn } from "@/lib/utils";

const skill = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", src:"https://i.icoziv.workers.dev/icons?i=html,css", alt:"HTML/CSS"},
  { name: "JavaScript", category: "frontend", src:"https://i.icoziv.workers.dev/icons?i=js", alt:"JavaScript"},
  { name: "React", category: "frontend", src:"https://i.icoziv.workers.dev/icons?i=reactjs", alt:"React" },
  { name: "Tailwind CSS", category: "frontend", src:"https://i.icoziv.workers.dev/icons?i=tailwindcss", alt:"TailWind CSS" },


  // Backend
  { name: "Python", category: "backend", src:"https://i.icoziv.workers.dev/icons?i=python", alt:"Python" },
  { name: "Java", category: "backend", src:"https://i.icoziv.workers.dev/icons?i=java", alt:"Java" },
  { name: "Node.js", category: "backend", src:"https://i.icoziv.workers.dev/icons?i=nodejs", alt:"NodeJS" },
  { name: "MongoDB", category: "backend", src:"https://i.icoziv.workers.dev/icons?i=mongodb", alt:"MongoDB" },
  { name: "MySQL", category: "backend", src:"https://i.icoziv.workers.dev/icons?i=mysql", alt:"MySQL" },

  // Tools
  { name: "Git/GitHub", category: "tools", src:"https://i.icoziv.workers.dev/icons?i=git,github", alt:"Git/GitHub" },
  { name: "Figma", category: "tools", src:"https://i.icoziv.workers.dev/icons?i=figma", alt:"Figma" },
  { name: "VS Code", category: "tools", src:"https://i.icoziv.workers.dev/icons?i=vscode", alt:"VS Code" },
  { name: "Adobe Photoshop", category: "tools", src:"https://i.icoziv.workers.dev/icons?i=adobephotoshop", alt:"Adobe PhotoShop" },
  { name: "Adobe Premiere Pro", category: "tools", src:"https://i.icoziv.workers.dev/icons?i=adobepremiere", alt:"Adobe Premiere Pro" },
];


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skill.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400 transition-all delay-75 easy-in-out hover:translate-y-1 hover:scale-110 hover:text-indigo-500"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 font-bold rounded-full transition-colors duration-300 capitalize ",
                activeCategory === category
                  ? "bg-blue-400 text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover justify-center transition delay-50 hover:shadow-[0px_0px_25px_-4px_rgba(124,134,225,1)]"
            >
              <div className="flex justify-center">
                <img src={skill.src} alt={skill.alt}/>
              </div>
              <div className="text-center mb-4 ">
                <h3 className="font-semibold text-lg mt-4"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
