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
                <motion.div
                  className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 dark:from-blue-900/20 dark:to-slate-800/50 p-6 mb-4 md:mb-0 md:mr-6 w-48 h-40 flex items-center justify-center shadow-lg border border-blue-200/30 dark:border-blue-700/30"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">RB</div>
                    <div className="text-xs text-blue-500 dark:text-blue-300">Frontend Developer</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">3+ Years Exp</div>
                  </div>
                </motion.div>
                <div className="flex-1 text-start">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Ramesh Boddu – Frontend Developer
                  </motion.h3>
                  <motion.div 
                    className="mb-4 text-gray-600 dark:text-gray-300 space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">📧 rameshboddu.dev@gmail.com</span>
                      <span className="text-blue-600 dark:text-blue-400">📱 +91-9866324172</span>
                      <span className="text-blue-600 dark:text-blue-400">📍 Hyderabad, India</span>
                    </div>
                    <div className="mt-3">
                      <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Technical Skills:</div>
                      <div className="text-sm leading-relaxed">React.js, JavaScript (ES6+), Redux, Material-UI, Tailwind CSS, HTML5, CSS3, REST APIs, Jest, Git</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Current Role:</div>
                      <div className="text-sm">Software Engineer at Kanerika Software Pvt Ltd (July 2022 – Present)</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Education:</div>
                      <div className="text-sm">B.Tech Mechanical Engineering, NMRCE Hyderabad (CGPA 7.2)</div>
                    </div>
                  </motion.div>
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
                      download="RameshBoddu_Frontend_Developer_Resume.pdf"
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
