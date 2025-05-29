
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-blue-500" />,
    title: "Email",
    description: "ramesh@example.com",
    link: "mailto:ramesh@example.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-blue-500" />,
    title: "Phone",
    description: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <Github className="h-6 w-6 text-blue-500" />,
    title: "GitHub",
    description: "github.com/ramesh-dev",
    link: "https://github.com/ramesh-dev",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-blue-500" />,
    title: "LinkedIn",
    description: "linkedin.com/in/ramesh-dev",
    link: "https://linkedin.com/in/ramesh-dev",
  },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you! Feel free to reach out using the form or
            contact details below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="shadow-md dark:bg-card">
              <CardHeader>
                <CardTitle className="dark:text-white">Send Me a Message</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.form 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="w-full dark:bg-gray-800 dark:border-gray-700"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="w-full dark:bg-gray-800 dark:border-gray-700"
                      />
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      required
                      className="w-full dark:bg-gray-800 dark:border-gray-700"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      required
                      className="min-h-[120px] w-full dark:bg-gray-800 dark:border-gray-700"
                    />
                  </motion.div>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="shadow-md h-full dark:bg-card">
              <CardHeader>
                <CardTitle className="dark:text-white">Contact Information</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-md transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex-shrink-0 mt-1">{method.icon}</div>
                      <div className="ml-3">
                        <h4 className="text-md font-medium text-gray-900 dark:text-white">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {method.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
