
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm</span>
          <span className="block text-primary mt-2">Ramesh</span>
        </h1>
        <h2 className="mt-6 text-xl sm:text-2xl font-medium text-gray-600">
          Front-End Developer
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-lg mx-auto">
          I craft responsive and performant web applications with modern
          JavaScript frameworks and a focus on user experience.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
