
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, FileCode, Monitor } from "lucide-react";

const skills = [
  {
    category: "Front-End",
    icon: <Monitor className="h-6 w-6 text-blue-500" />,
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "Tools & Platforms",
    icon: <Laptop className="h-6 w-6 text-blue-500" />,
    items: ["Git", "VS Code", "Figma", "WordPress", "Responsive Design"],
  },
  {
    category: "Additional Skills",
    icon: <FileCode className="h-6 w-6 text-blue-500" />,
    items: ["UiPath (RPA)", "AS400", "DB2400"],
  },
  {
    category: "Soft Skills",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    items: [
      "Problem Solving",
      "Communication",
      "Time Management",
      "Adaptability",
      "Teamwork",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h3 className="text-lg font-semibold ml-2">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center py-2 px-3 bg-white rounded-md shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
