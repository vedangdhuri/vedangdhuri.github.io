import { Code, User } from "lucide-react";
// import { Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400 transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110 hover:text-indigo-500 "> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Enthusiastic Computer Engineering Student & Web Innovator
            </h3>

            <p className="text-muted-foreground ">
              As a 3rd-year Computer Engineering student under MSBTE (Batch 2025–26), I’m passionate about
              building user-friendly designs and solving real-world problems through code. With hands-on
              experience in Web Development, IoT, Python, React.js, and UI/UX design, I enjoy transforming
              creative ideas into functional digital experiences.
            </p>

            <p className="text-muted-foreground">
              Im passionate about creating elegant solutions to complex
              problems, and Im constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button bg-blue-400 font-bold transition delay-150 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)]">
                {" "}
                Get In Touch
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-blue-400/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover transition delay-50 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <Code className="h-7 w-7 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover transition delay-50 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <User className="h-7 w-7 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
