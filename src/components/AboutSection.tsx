
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Background</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate Front-End Developer with expertise in building
                interactive and responsive web applications. My journey in web
                development started with a curiosity about how websites work, and
                has evolved into a professional career creating modern web
                experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a strong foundation in React.js, JavaScript, HTML, CSS, and
                TailwindCSS, I focus on creating user-friendly interfaces that
                are both functional and visually appealing. I also have
                experience with UiPath (RPA), AS400, DB2400, and WordPress,
                giving me a well-rounded skill set to tackle various technical
                challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm constantly learning and adapting to new technologies to stay
                at the forefront of web development practices. My goal is to
                create elegant solutions that make a positive impact on users'
                lives.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900 block">Name:</span>
                  Ramesh
                </li>
                <li>
                  <span className="font-medium text-gray-900 block">
                    Occupation:
                  </span>
                  Front-End Developer
                </li>
                <li>
                  <span className="font-medium text-gray-900 block">
                    Location:
                  </span>
                  Available for Remote Work
                </li>
                <li className="pt-4">
                  <span className="font-medium text-gray-900 block mb-2">
                    Interests:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Web Development", "UI/UX Design", "Tech", "Innovation"].map(
                      (interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
