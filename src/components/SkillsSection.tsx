
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <motion.div 
            className="grid grid-cols-2 gap-6 md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skills.map((skill, index) => (
              <motion.div key={skill} variants={cardVariants}>
                <Card className="p-4 text-center shadow-sm rounded-lg bg-white dark:bg-card hover:shadow-md transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent className="font-medium text-gray-700 dark:text-gray-200">
                      {skill}
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4 items-center md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {stackImages.map((img, index) => (
              <motion.img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="rounded-xl shadow w-full max-w-xs object-cover border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
