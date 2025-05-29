import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card className="md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-card">
              <CardContent className="pt-6">
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                    alt="Profile"
                    className="w-28 h-28 rounded-full mx-auto object-cover shadow-md ring-4 ring-primary/20"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">My Background</h3>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                  I'm a passionate Front-End Developer with expertise in building
                  interactive and responsive web applications. My journey in web
                  development started with a curiosity about how websites work, and
                  has evolved into a professional career creating modern web
                  experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                  With a strong foundation in React.js, JavaScript, HTML, CSS, and
                  TailwindCSS, I focus on creating user-friendly interfaces that
                  are both functional and visually appealing. I also have
                  experience with UiPath (RPA), AS400, DB2400, and WordPress,
                  giving me a well-rounded skill set to tackle various technical
                  challenges.
                </p>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                  I'm constantly learning and adapting to new technologies to stay
                  at the forefront of web development practices. My goal is to
                  create elegant solutions that make a positive impact on users'
                  lives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-card">
              <CardContent className="pt-6">
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
                    alt="About Illustration"
                    className="w-full h-28 object-cover rounded-md shadow"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Details</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium text-gray-900 dark:text-white block">Name:</span>
                    Ramesh
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-white block">
                      Occupation:
                    </span>
                    Front-End Developer
                  </li>
                  <li>
                    <span className="font-medium text-gray-900 dark:text-white block">
                      Location:
                    </span>
                    Available for Remote Work
                  </li>
                  <li className="pt-4">
                    <span className="font-medium text-gray-900 dark:text-white block mb-2">
                      Interests:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["Web Development", "UI/UX Design", "Tech", "Innovation"].map(
                        (interest, index) => (
                          <motion.span
                            key={interest}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                          >
                            {interest}
                          </motion.span>
                        )
                      )}
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
