
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Resume
        </h2>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Download my resume or view a summary below.
        </p>
        <Card className="mt-8 shadow transition-shadow hover:shadow-lg bg-white dark:bg-card">
          <CardContent className="p-8 flex flex-col md:flex-row items-center md:gap-8">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=350&q=80"
              alt="Resume Banner"
              className="rounded-md mb-4 md:mb-0 md:mr-6 w-32 h-40 object-cover shadow"
            />
            <div className="flex-1 text-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Ramesh – Front-End Developer
              </h3>
              <ul className="mb-4 text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-medium">Tech Stack:</span> React.js, JavaScript, HTML, CSS, TailwindCSS
                </li>
                <li>
                  <span className="font-medium">Additional Skills:</span> UiPath (RPA), AS400, DB2400, WordPress
                </li>
                <li>
                  <span className="font-medium">Experience:</span> Building responsive, accessible, and performant web applications.
                </li>
                <li>
                  <span className="font-medium">Location:</span> Available for Remote Work
                </li>
              </ul>
              <Button asChild size="lg">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center"
                >
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
