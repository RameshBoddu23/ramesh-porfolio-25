
import { Card, CardContent } from "@/components/ui/card";

const stackImages = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    alt: "Laptop & monitor showing JavaScript code",
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    alt: "Gray laptop computer",
  },
];

const skills = [
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "UiPath (RPA)",
  "AS400",
  "DB2400",
  "WordPress",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            {skills.map((skill) => (
              <Card
                key={skill}
                className="p-4 text-center shadow-sm rounded-lg bg-white dark:bg-card"
              >
                <CardContent className="font-medium text-gray-700 dark:text-gray-200">
                  {skill}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center md:w-1/2">
            {stackImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="rounded-xl shadow w-full max-w-xs object-cover border border-gray-100 dark:border-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
