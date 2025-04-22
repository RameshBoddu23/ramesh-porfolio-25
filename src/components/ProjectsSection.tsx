
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for an e-commerce platform with real-time analytics, order management, and inventory tracking.",
    tags: ["React", "TailwindCSS", "Chart.js", "Firebase"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A web application to track personal expenses, create budgets, and visualize spending patterns to help users manage their finances.",
    tags: ["React", "JavaScript", "TailwindCSS", "LocalStorage API"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather Application",
    description:
      "A weather app that provides current conditions and forecasts based on user location with a clean, intuitive interface.",
    tags: ["JavaScript", "CSS", "HTML", "Weather API"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Management System",
    description:
      "A drag-and-drop task management system with features like task categorization, priorities, deadlines, and team collaboration.",
    tags: ["React", "TailwindCSS", "DnD Library", "Firebase"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-br dark:from-blue-900/30 dark:via-blue-950/40 dark:to-blue-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in front-end development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white">{project.title}</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="dark:border-gray-700 dark:text-gray-200" 
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="dark:bg-blue-800 dark:hover:bg-blue-700" 
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Link className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
