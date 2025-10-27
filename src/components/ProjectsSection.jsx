import { ArrowRight, Github, } from "lucide-react";
// import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Safe City Hub",
    description: "A Multi-Stakeholder Crime Reporting, Monitoring & Real-Time Urban Safety Management Platform.",
    image: "https://github.com/vedangdhuri/images/blob/main/safecityhub.png?raw=true",
    tags: ["HTML", "CSS", "BootStrap", "Python", "Django", "MySQL"],
    // demoUrl: "#",
    githubUrl: "https://github.com/vedangdhuri/SafeCity-Hub",
  },
  {
    id: 2,
    title: "To Do List Using React",
    description:
      "A responsive To-Do List app built with React.js that helps users efficiently organize tasks with an intuitive interface for adding, editing, deleting, and marking tasks as completed.",
    image: "https://github.com/vedangdhuri/images/blob/main/to_do_list_using_react.png?raw=true",
    tags: ["React", "JavaScript", "Vite"],
    // demoUrl: "#",
    githubUrl: "https://github.com/vedangdhuri/To-Do-List-Using-REACT",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A Java application that uses AES for secure text encryption and decryption, demonstrating symmetric key cryptography to protect sensitive information.",
    image: "https://github.com/vedangdhuri/images/blob/main/aes-edcryption.png?raw=true",
    tags: ["Java"],
    // demoUrl: "#",
    githubUrl: "https://github.com/vedangdhuri/AES-Encryption-Decryption-Using-Java",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-blue-400 transition delay-100 easy-in-out hover:translate-y-1 hover:scale=110 hover:text-indigo-500"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am currently working on innovative projects that combine
          problem-solving, coding, and design, strengthening my skills
          in Python, Web Development, and UI/UX design while creating
          real-world solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden card-hover transition delay-100 ease-in-out hover:translate-y-1 hover:scale-110 hover:shadow-[0px_0px_15px_-4px_rgba(81,162,225,1)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-200 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* External Link */}
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}

                    {/* GitHub Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="bg-blue-400 cosmic-button w-fit flex items-center mx-auto gap-2 transition delay-100 easy-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-400"
            target="_blank"
            href="https://github.com/vedangdhuri"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
