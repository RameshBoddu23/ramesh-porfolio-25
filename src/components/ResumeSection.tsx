import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-800/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Resume
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Download my resume or view a summary below.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="mt-8 shadow transition-shadow hover:shadow-lg bg-white dark:bg-card">
            <CardContent className="p-8 flex flex-col md:flex-row items-center md:gap-8">
              <motion.img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=350&q=80"
                alt="Resume Banner"
                className="rounded-md mb-4 md:mb-0 md:mr-6 w-32 h-40 object-cover shadow"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1 text-start">
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ramesh – Front-End Developer
                </motion.h3>
                <motion.ul 
                  className="mb-4 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
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
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
