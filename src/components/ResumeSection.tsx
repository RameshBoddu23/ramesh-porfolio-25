
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Book, FileText, Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Resume
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <div className="mt-6 flex justify-center">
            <Button asChild className="flex items-center">
              <a href="#" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">
                        Senior Front-End Developer
                      </h4>
                      <p className="text-blue-600">Web Solutions Inc.</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      2020 - Present
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>
                      Developed responsive web applications using React.js and
                      TailwindCSS
                    </li>
                    <li>
                      Collaborated with UX/UI teams to implement design systems
                    </li>
                    <li>
                      Optimized application performance and improved load times
                      by 40%
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">
                        Front-End Developer
                      </h4>
                      <p className="text-blue-600">Digital Creations Co.</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      2018 - 2020
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>
                      Built interactive user interfaces using JavaScript and
                      modern CSS frameworks
                    </li>
                    <li>
                      Implemented responsive designs across various devices and
                      screen sizes
                    </li>
                    <li>
                      Worked with RESTful APIs to integrate front-end with
                      back-end services
                    </li>
                    <li>
                      Participated in agile development processes and sprint
                      planning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Book className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">
                        Bachelor of Computer Science
                      </h4>
                      <p className="text-blue-600">University of Technology</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      2014 - 2018
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Focused on web development and software engineering
                    principles with coursework in algorithms, data structures,
                    and user interface design.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-10">
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-2xl font-semibold">Certifications</h3>
                </div>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">
                            Advanced React Development
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Frontend Masters
                          </p>
                        </div>
                        <span className="text-gray-500 text-sm">2022</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">
                            UiPath RPA Developer
                          </h4>
                          <p className="text-gray-600 text-sm">UiPath Academy</p>
                        </div>
                        <span className="text-gray-500 text-sm">2021</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">
                            JavaScript Algorithms and Data Structures
                          </h4>
                          <p className="text-gray-600 text-sm">freeCodeCamp</p>
                        </div>
                        <span className="text-gray-500 text-sm">2020</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
